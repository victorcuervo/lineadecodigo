---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSCGP3T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7%2FwtoLwBjph%2FZxnBoCBlaMzGEgULppJvM%2BtmkEH4M7AiAbh1SIrsNghQqL0vrNnfyFUB5Fq75HH8ksA2qh0zG81yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAcHjf9oaWf7BAd6yKtwDknVcHUKA2IQbHTS%2FAsgG8hYvjNARPRL%2Bnxc6tC%2B%2FC%2Fb%2Fhdif8782FPmKf5uJ3rfR9%2B3DHQmTgMP%2BOa8HIWNdmWF0fCS60zbU3J0ye9GGekYJ8Z6VYJEDXj%2FNntsyakU2tMmuVFuDqZrOJnApomlXJzryrecqLyMY%2BysGyMZjW46aUcR5%2B7LFIq2mNtF1frjaXamriOjmWeW2Eod3Ek0%2FVFkPEH6ce6JBcQjMGXFEwHejdUFkDYZZS8ziXWFnvRIbzkaqQhrZeJ4ptVxG5ZiCNYT7JanzDBg7xXXnnuTzNM56oTEHtfFJW0IbadvqLxJhkjWtrqkCs0KPO5bBLnArrSVZrQ19FcFFvBPRowfMUmBs3DemJNCTWsNxCaU929DNjq%2Br50I9yuoC80NqOH9g5U6QC5oGKn8Gop5hS%2FSi2Ewxg3CNRyLxoQ5e05%2BiahR80M9oyRyVCf4ZcXfZOtEM3fdV5xxMGKuIseYHPGAvyYC1wqwMyULMSyKqYWolmNcTGxwGFRUOVKGkWtdoSKR%2FNcR7VI6jUX2P1OEUBtpaWnSMYKXIf77NiG3HwQVNTGHTSs4%2BbVocL1NPUHrh8QRUZLVh4CXVZ5G7O53Gs8WtjPJa4fkuX1mDcqVaUAcwz6bQyQY6pgFfvZoRRqhVrWXNW4jhCB%2B%2Bk45uFr1MFIRDmYhH3gOabwfLQN6FJqglZxpqRpLnRLMLAzWscqbyIaqvhJFgAITtyNPpT0fWKbA7H4JdoKfKXxTKNLYXHOOErbmHmtYwRAX%2Fbsq33xhXW57ipym6sByZcR6t8RIt9qFe5f1neqqIb2g%2BYjU7G4%2F8P8wyA0z26%2FDu85irR06DGVq83LrMAGlUETAAoYVu&X-Amz-Signature=b66763183d871fe7c37545101fdb78d079322c301f67ecf94838009eeabb2ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSCGP3T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7%2FwtoLwBjph%2FZxnBoCBlaMzGEgULppJvM%2BtmkEH4M7AiAbh1SIrsNghQqL0vrNnfyFUB5Fq75HH8ksA2qh0zG81yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAcHjf9oaWf7BAd6yKtwDknVcHUKA2IQbHTS%2FAsgG8hYvjNARPRL%2Bnxc6tC%2B%2FC%2Fb%2Fhdif8782FPmKf5uJ3rfR9%2B3DHQmTgMP%2BOa8HIWNdmWF0fCS60zbU3J0ye9GGekYJ8Z6VYJEDXj%2FNntsyakU2tMmuVFuDqZrOJnApomlXJzryrecqLyMY%2BysGyMZjW46aUcR5%2B7LFIq2mNtF1frjaXamriOjmWeW2Eod3Ek0%2FVFkPEH6ce6JBcQjMGXFEwHejdUFkDYZZS8ziXWFnvRIbzkaqQhrZeJ4ptVxG5ZiCNYT7JanzDBg7xXXnnuTzNM56oTEHtfFJW0IbadvqLxJhkjWtrqkCs0KPO5bBLnArrSVZrQ19FcFFvBPRowfMUmBs3DemJNCTWsNxCaU929DNjq%2Br50I9yuoC80NqOH9g5U6QC5oGKn8Gop5hS%2FSi2Ewxg3CNRyLxoQ5e05%2BiahR80M9oyRyVCf4ZcXfZOtEM3fdV5xxMGKuIseYHPGAvyYC1wqwMyULMSyKqYWolmNcTGxwGFRUOVKGkWtdoSKR%2FNcR7VI6jUX2P1OEUBtpaWnSMYKXIf77NiG3HwQVNTGHTSs4%2BbVocL1NPUHrh8QRUZLVh4CXVZ5G7O53Gs8WtjPJa4fkuX1mDcqVaUAcwz6bQyQY6pgFfvZoRRqhVrWXNW4jhCB%2B%2Bk45uFr1MFIRDmYhH3gOabwfLQN6FJqglZxpqRpLnRLMLAzWscqbyIaqvhJFgAITtyNPpT0fWKbA7H4JdoKfKXxTKNLYXHOOErbmHmtYwRAX%2Fbsq33xhXW57ipym6sByZcR6t8RIt9qFe5f1neqqIb2g%2BYjU7G4%2F8P8wyA0z26%2FDu85irR06DGVq83LrMAGlUETAAoYVu&X-Amz-Signature=0f0a4192ef0aabf19825996cc85b4457de3c65816ba7cf341b3f9edb8237144a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

