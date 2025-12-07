---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7THZLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnWshkDyuUsRd%2BYf345FmFq%2BZp%2BGXGwumqT2ow84cfYAiEA7IPXkDjk0Bn8uZz1hY0xLfLKFjVmmXdRa2xmRXOcNMYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5s4l75DbX3SEz%2F9CrcA2%2FDBQq1D%2BKVH64QrKjS%2B5UfsPMjh9llYjyTBH7%2Bc7JGjt0%2FEOh%2B9%2FjiyotLF8030bdAzsKd5moLcGEnYO%2BL45dwJxbEBcISvyCBdbDlOrjidwKV1C9Exs0abbkeW6sn3O9i%2FJvl4toNFtS1HQ22LKTbspyfKaRPuxdH5dJWSk9jaZ87FA9z10sLB6z5iAOAtD45qMZcXhfXBlviUSx7qMBIk0OsfctkwwDkVi8V%2Bpl4PcVeoecFOCQJ8bNUr6TT8VUmDc%2BNgsm2hgrrGMVqI76cxcow0HQMjGQozk%2BQGfnki4Axtn3pFHUtT1umCJaOy8mn4HICZOKPzcxUCAEpPHIy6BNhby0RYQf8tPqmmb%2BmZVAxM%2BQP9mkKVZaQ2CfRkbu2QxgAWV%2FVMd4Tuh3Vw4ypqrfqF144xQGWPyVKeG3J1w0udxvKZzc7epPO1CeM9BXFIu0oxo4Qm71cMIMa6L7da%2FkUl8fOzpiP9Q0CoeGdjJKoq6zgV7dNb%2FP72L%2FlY2Y5tFFGv84ZR44uQS%2BwTd9Qz6lVoTrCDXE0mBGOpbBioSSRp9JundFE8xCCFsSqf9fyqR9MpIGKEmXS294m%2BKhUErEy6PHoIg8Kew0vxGrmClJywCBe%2B0GNHcYIMLj90skGOqUB08eJJZC3mDct43SO8zA0RnyRujKkbnWtiNJ5r21%2B8TPoUgAXxFpW%2FSBPSg%2FGzbzJANw8stF%2BRZzcRR878ZOQz7qjJVe%2F16Qm0H8etq3X%2BiDuhtK03GxQqlpA3cjbpFM%2BXD3kLEYA51SrkixmBjKM7NzNZxFHkv%2B8axAQZGL1Tow%2Blrv1u0p3YfE2Z0UXHCBCvx1aGG7V78Dshqdg4%2Bg5yb6keJc7&X-Amz-Signature=3b2a05d42533c0558e47131d11d3efa78dcef73f596cce8b2351700d91ee4be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7THZLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnWshkDyuUsRd%2BYf345FmFq%2BZp%2BGXGwumqT2ow84cfYAiEA7IPXkDjk0Bn8uZz1hY0xLfLKFjVmmXdRa2xmRXOcNMYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5s4l75DbX3SEz%2F9CrcA2%2FDBQq1D%2BKVH64QrKjS%2B5UfsPMjh9llYjyTBH7%2Bc7JGjt0%2FEOh%2B9%2FjiyotLF8030bdAzsKd5moLcGEnYO%2BL45dwJxbEBcISvyCBdbDlOrjidwKV1C9Exs0abbkeW6sn3O9i%2FJvl4toNFtS1HQ22LKTbspyfKaRPuxdH5dJWSk9jaZ87FA9z10sLB6z5iAOAtD45qMZcXhfXBlviUSx7qMBIk0OsfctkwwDkVi8V%2Bpl4PcVeoecFOCQJ8bNUr6TT8VUmDc%2BNgsm2hgrrGMVqI76cxcow0HQMjGQozk%2BQGfnki4Axtn3pFHUtT1umCJaOy8mn4HICZOKPzcxUCAEpPHIy6BNhby0RYQf8tPqmmb%2BmZVAxM%2BQP9mkKVZaQ2CfRkbu2QxgAWV%2FVMd4Tuh3Vw4ypqrfqF144xQGWPyVKeG3J1w0udxvKZzc7epPO1CeM9BXFIu0oxo4Qm71cMIMa6L7da%2FkUl8fOzpiP9Q0CoeGdjJKoq6zgV7dNb%2FP72L%2FlY2Y5tFFGv84ZR44uQS%2BwTd9Qz6lVoTrCDXE0mBGOpbBioSSRp9JundFE8xCCFsSqf9fyqR9MpIGKEmXS294m%2BKhUErEy6PHoIg8Kew0vxGrmClJywCBe%2B0GNHcYIMLj90skGOqUB08eJJZC3mDct43SO8zA0RnyRujKkbnWtiNJ5r21%2B8TPoUgAXxFpW%2FSBPSg%2FGzbzJANw8stF%2BRZzcRR878ZOQz7qjJVe%2F16Qm0H8etq3X%2BiDuhtK03GxQqlpA3cjbpFM%2BXD3kLEYA51SrkixmBjKM7NzNZxFHkv%2B8axAQZGL1Tow%2Blrv1u0p3YfE2Z0UXHCBCvx1aGG7V78Dshqdg4%2Bg5yb6keJc7&X-Amz-Signature=f570abc70d67a9debc9fd908802f4f840a46a87173b41ff0108fe04e3122570d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

