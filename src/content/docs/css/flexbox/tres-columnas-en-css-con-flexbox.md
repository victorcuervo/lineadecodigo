---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CED3OZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB45NC0ZJivKwjO6YPOeI2Z%2FH5wNdKMcam4pypaEzzSMAiEA7%2F5chFqLaNOuGW0bgJKJ%2BKoAvFzPEG5a%2FPrxyPjZXqgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFgqh73B7KJICkyljircAzSloyieEaVxfg0Iuu2jbYZuf3ZENu024D6Ow5KKjKVdJNOFEonoKWqbYLNb3TSi9nyjfWut%2FzEGDT9XSgJi0IzkpsBL0ehBMXCKBk8MitR3Azr2TsUQfZzKCPP0hphNsyeIrLL6HyVyNEGRnRqFQ9y8GClCz3%2FDY6v3SmUUBRr5GLZ9s7OLn7q%2Bmm1ZVATxSVKcRA0aShHoIYVNOxgHyoeGT0%2BBucRqmV0lmjZZEyCPlPFSqD1oaaE0%2BqzH5WVKU2rwADmNqUN9mUGtfm%2FBWwrL4qSkVAW6YiSxCX8IPiB%2B2jZSiXM47eB1mNysC6QD9sxs68PxLMF7Kl5wQGthjA5QmuppUJ06MTPmNntuRbbzxDhAhiRiuaXVTV4supyjD7R5Bn8X7fhpuJ6V7%2BTu%2Bid2x2MiZzO7MFzrh4NkpKjPp%2B0mgply10i8RyQmvKC8ju%2F34JtfpXwf3HyfCcIg75Hs%2BbPIsl2Uzeif5d4xlVZL4Qg4uoO3%2FkQLfI8dqo16dyD5GfIFiBVZOWgGtE%2F2sFaHdvH%2BhDfAGsDaDm7jWgboHde68B07ZF3gM2ZA%2BMD4MUmMiIf7Rjc7%2FN6agLh7NBbWVNjq8QwtgwQjoB1Lhs9AtVRS%2Bbrcxs3nVGyUMJK9z8kGOqUByYT2bhSPEbpjFQ7trfEUkghseX6%2FOSHoN2fSL5%2BtH7McZSPGsQMCXzdX299Tzky80sOJkDadvxqNklls6wSMIMN1e%2FwBjZwl%2FIAf4Zb7gLJ4UNtnFFP%2Bxgl1rrr%2FCumSwg%2B86DTCP7v198Udivi4Olr1FktuXmMr4Mpd7sEvRHdAuGcxZL8DG57lwBKXMtddRKV35vGd3hUPW1pJJ6AYTFEVbBME&X-Amz-Signature=96d3b50e1c536511ac9f4fd919a90e050c8343320a86acc42c56c6776e38bd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CED3OZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB45NC0ZJivKwjO6YPOeI2Z%2FH5wNdKMcam4pypaEzzSMAiEA7%2F5chFqLaNOuGW0bgJKJ%2BKoAvFzPEG5a%2FPrxyPjZXqgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFgqh73B7KJICkyljircAzSloyieEaVxfg0Iuu2jbYZuf3ZENu024D6Ow5KKjKVdJNOFEonoKWqbYLNb3TSi9nyjfWut%2FzEGDT9XSgJi0IzkpsBL0ehBMXCKBk8MitR3Azr2TsUQfZzKCPP0hphNsyeIrLL6HyVyNEGRnRqFQ9y8GClCz3%2FDY6v3SmUUBRr5GLZ9s7OLn7q%2Bmm1ZVATxSVKcRA0aShHoIYVNOxgHyoeGT0%2BBucRqmV0lmjZZEyCPlPFSqD1oaaE0%2BqzH5WVKU2rwADmNqUN9mUGtfm%2FBWwrL4qSkVAW6YiSxCX8IPiB%2B2jZSiXM47eB1mNysC6QD9sxs68PxLMF7Kl5wQGthjA5QmuppUJ06MTPmNntuRbbzxDhAhiRiuaXVTV4supyjD7R5Bn8X7fhpuJ6V7%2BTu%2Bid2x2MiZzO7MFzrh4NkpKjPp%2B0mgply10i8RyQmvKC8ju%2F34JtfpXwf3HyfCcIg75Hs%2BbPIsl2Uzeif5d4xlVZL4Qg4uoO3%2FkQLfI8dqo16dyD5GfIFiBVZOWgGtE%2F2sFaHdvH%2BhDfAGsDaDm7jWgboHde68B07ZF3gM2ZA%2BMD4MUmMiIf7Rjc7%2FN6agLh7NBbWVNjq8QwtgwQjoB1Lhs9AtVRS%2Bbrcxs3nVGyUMJK9z8kGOqUByYT2bhSPEbpjFQ7trfEUkghseX6%2FOSHoN2fSL5%2BtH7McZSPGsQMCXzdX299Tzky80sOJkDadvxqNklls6wSMIMN1e%2FwBjZwl%2FIAf4Zb7gLJ4UNtnFFP%2Bxgl1rrr%2FCumSwg%2B86DTCP7v198Udivi4Olr1FktuXmMr4Mpd7sEvRHdAuGcxZL8DG57lwBKXMtddRKV35vGd3hUPW1pJJ6AYTFEVbBME&X-Amz-Signature=42599fbf6d7551aafd673a72183cd1aab6719425e0b6e76f7dd53cf628637ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

