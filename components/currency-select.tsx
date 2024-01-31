import { CURRENCIES } from "../lib/currencies";
import { CurrencyData } from "../lib/types";

export function CurrencySelect(props: {
   onCurrencyChange: (currencyData: CurrencyData) => void;
}) {
   return (
      <div className="flex items-center justify-between">
         <div className="flex-1">
            <select
               onChange={(e) => props.onCurrencyChange(JSON.parse(e.target.value))}
               name="currency"
               id="currency"
               className="w-full border outline-none rounded-md p-2"
            >
               {CURRENCIES.map((currency) => (
                  <option key={JSON.stringify(currency)} value={JSON.stringify(currency)}>
                     {currency.name}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
}
