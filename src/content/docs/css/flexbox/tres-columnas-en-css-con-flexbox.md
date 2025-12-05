---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6RF46K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaM%2BEJqiwsZcJvV8Fl3fYYcXSr1iPbVot%2FnXJKDBYQUAiEAxBEj8tdQs%2Fd%2BjxFAGto97kwp%2B4SDGqahaW8RHZ1powMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJS4eAwSIgnXmpyrzCrcA2rsrg0WCfR2fUjlv3yT6eAWE3%2FcklyKGFSzyV%2BmjuxgGfWZfH1S06RJs09w9uXAmB%2FnM%2BftFx11vQr9D0XcDOd%2FideKIfgxmwGegXOGjH29ZjekBc6%2F3DTvUn%2B9a8nvFRI1BZUANeaFmdR0SJVRIiWdVBk5U6ozobWv9rILETZJAqGTNPUua3cw7eQa2UGCFwhWNxKlge9GXJmt7ic9%2F7rYceB%2FeOpsi6aQC4Cjv0MmBROxMzaLfXa3e%2FXQ51Isyt8mATljvJnrAaS3aKePSbJTF%2F1cOsZSAuvxIY98QDURJOYNYKCMCOYyaM%2FFLuIe5wgtlFOn%2ByU4GUzdSINa4PdCVQerR%2BtqKds5UocP6Zp%2BaHZtLbkPvynBgUnwbb%2BmNY455IlvkLs3Wm8u7rr2uQA%2FUT93EBSp9M7rmNBO%2BwvsAoemrMbtQcWh354rDTnkIrINoRt2xBkgEAdQ0%2FnUXOOzWunyYWnHvqehTqV9PuVBlfoWpXwh05AuxZ66IxjdOnA069lA20ATtYdq1%2BJeuCjdW7h36yrWrSGRRiRvKfsqBM1zdqdPslz6MSPLO1cIl28ILPkcLNkIyyKbmFI06NlifSXen2cClrcGGbm4f%2FAUlMj4IEW2ghihdvd6MLOxyckGOqUBr8%2BRGIbkQKj8wF6PKLz5Qb%2FnDy9daOya3QBz5TeIZNrbBgmTI4Tc6TUUpvuRIwzyXKk7jet39qEXo6gLwa7OeTewlqu9lzWrVTEIKJFVsCGEDSVIgIF56Yf3TZ12H3pdrBCCRlw8RFXNJNOrDgzviAA1vMV2Ss2Dw6V9ZzifG3L%2FKjvxH0lYY6g9Bl9KE25DEQzTeSi0dbOXO7ARc1LuGgOV2hnU&X-Amz-Signature=84c5cb861205605dd29301e831e95d4cfcfc77c96a4b5ec6fd543f560605c20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6RF46K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaM%2BEJqiwsZcJvV8Fl3fYYcXSr1iPbVot%2FnXJKDBYQUAiEAxBEj8tdQs%2Fd%2BjxFAGto97kwp%2B4SDGqahaW8RHZ1powMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJS4eAwSIgnXmpyrzCrcA2rsrg0WCfR2fUjlv3yT6eAWE3%2FcklyKGFSzyV%2BmjuxgGfWZfH1S06RJs09w9uXAmB%2FnM%2BftFx11vQr9D0XcDOd%2FideKIfgxmwGegXOGjH29ZjekBc6%2F3DTvUn%2B9a8nvFRI1BZUANeaFmdR0SJVRIiWdVBk5U6ozobWv9rILETZJAqGTNPUua3cw7eQa2UGCFwhWNxKlge9GXJmt7ic9%2F7rYceB%2FeOpsi6aQC4Cjv0MmBROxMzaLfXa3e%2FXQ51Isyt8mATljvJnrAaS3aKePSbJTF%2F1cOsZSAuvxIY98QDURJOYNYKCMCOYyaM%2FFLuIe5wgtlFOn%2ByU4GUzdSINa4PdCVQerR%2BtqKds5UocP6Zp%2BaHZtLbkPvynBgUnwbb%2BmNY455IlvkLs3Wm8u7rr2uQA%2FUT93EBSp9M7rmNBO%2BwvsAoemrMbtQcWh354rDTnkIrINoRt2xBkgEAdQ0%2FnUXOOzWunyYWnHvqehTqV9PuVBlfoWpXwh05AuxZ66IxjdOnA069lA20ATtYdq1%2BJeuCjdW7h36yrWrSGRRiRvKfsqBM1zdqdPslz6MSPLO1cIl28ILPkcLNkIyyKbmFI06NlifSXen2cClrcGGbm4f%2FAUlMj4IEW2ghihdvd6MLOxyckGOqUBr8%2BRGIbkQKj8wF6PKLz5Qb%2FnDy9daOya3QBz5TeIZNrbBgmTI4Tc6TUUpvuRIwzyXKk7jet39qEXo6gLwa7OeTewlqu9lzWrVTEIKJFVsCGEDSVIgIF56Yf3TZ12H3pdrBCCRlw8RFXNJNOrDgzviAA1vMV2Ss2Dw6V9ZzifG3L%2FKjvxH0lYY6g9Bl9KE25DEQzTeSi0dbOXO7ARc1LuGgOV2hnU&X-Amz-Signature=525f0bb6c73d5b19e9a6f899cb613b81d7daaeca9391192ee8d9b3d75541c564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

