
import { signal, useComputed } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
const count = signal([1, 1]);
export default function Counter() {
  // Initialize count with an empty array
  

  // Compute double based on count value
  const double = useComputed(() => count.value.length * 2);
  
  useSignals()
  return (
    
    <div>
      {count.value}
      {count.value.map((_, index) => (
        <div key={index}>Jesus</div>
      ))}
      <div class="oi">Double: {double}</div>
    </div>
  );
}