# Simulador de compra en cuotas con tarjeta de crédito
 
Un banco necesita un simulador para que un cliente vea cuánto pagaría por una compra diferida a cuotas con su tarjeta de crédito (la tasa mensual depende del número de cuotas), el interés total se calcula con una **fórmula didáctica** que simula el abono constante a capital (se explica más adelante). La compra se rechaza si supera el cupo disponible.
 
## Algoritmo
 
### Entradas
 
**Constantes:**
- Cuotas permitidas: de 1 a 36
- Tasa mensual según número de cuotas:
  - 1 cuota: 0 %
  - 2 - 12 cuotas: 1.9 %
  - 13 - 36 cuotas: 2.1 %
    
**Variables de entrada:**
- `valorCompra`: valor de la compra
- `cuotas`: número de cuotas
- `cupo`: cupo disponible de la tarjeta
  
### Proceso de cálculo
 
1. Validar que el valor de la compra y el cupo sean mayores que 0, y que las cuotas estén entre 1 y 36. Si no, informar el error y terminar.
2. Si el valor de la compra es mayor que el cupo, rechazar la compra por cupo insuficiente y terminar.
3. Asignar la tasa mensual según el número de cuotas.
4. Interés total: valor de la compra × tasa × (cuotas + 1) ÷ 2.
5. Total a pagar: valor de la compra más interés total.
6. Cuota mensual promedio: total a pagar ÷ cuotas (mostrar con 2 decimales).
   
### Salidas
 
Mostrar con `alert()`: tasa mensual aplicada, interés total, total a pagar y cuota mensual promedio. Si hay un dato inválido o la compra se rechaza, mostrar el mensaje correspondiente.
 
## Casos de prueba
 
| Caso | Entradas (valor, cuotas, cupo) | Salidas |
|---|---|---|
| 1 | 1.200.000, 1, 5.000.000 | Tasa: 0 % <br> Interés 0 <br> Total 1.200.000 <br> Cuota 1.200.000 |
| 2 | 1.200.000, 2, 5.000.000 | Tasa 1.9 % <br> Interés 34,200 <br> Total 1,234,200 <br> Cuota 617,100 |
| 3 | 1.200.000, 12, 5.000.000 | Tasa 1.9 % <br> Interés 148,200 <br> Total 1,348,200 <br> Cuota 112,350 |
| 4 | 1.200.000, 13, 5.000.000 | Tasa 2.1 % <br> Interés 176,400 <br> Total 1,376,400 <br> Cuota 105,876.92 |
| 5 | 1.200.000, 24, 5.000.000 | Tasa 2.1 % <br> Interés 315,000 <br> Total 1,515,000 <br> Cuota 63,125 |
| 6 | 1.200.000, 36, 5.000.000 | Tasa 2.1 % <br> Interés 466,200 <br> Total 1,666,200 <br> Cuota 46,283.33 |
| 7 | 5.000.000, 1, 5.000.000 (compra igual al cupo) | Tasa 0 % <br> Interés 0 <br> Total 5.000.000 <br> Cuota 5.000.000 |
| 8 | 6,000,000, 1, 5.000.000 | "Compra rechazada por cupo insuficiente" |
| 9 | 1.200.000, 0, 5.000.000 | "Número de cuotas no válido" |
| 10 | 1.200.000, 37, 5.000.000 | "Número de cuotas no válido" |
| 11 | 0, 6, 5.000.000 | "Valor de compra no válido" |
