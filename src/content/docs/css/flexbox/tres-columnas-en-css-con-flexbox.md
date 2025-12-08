---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275RRU7H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ5F0cxPOOPAjuPxyPeq73yKXz8ri2VGXdMnB0XJQAKQIhAIALb739wfoDTnYmo4PCNuXrez9Y7MFEDWn1JWr3lAuZKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1ETfNsWZD5tI7lr4q3AOTSOkCS%2BgK%2FIf74GuLXBePvSnYXc6wdnnZUzhGwPGX%2FQaoi97eoxeyYV5JugqjFEXm8Z9VkqILdtQMHxjeOl4V1A83pmKUJXz5prSSQzeAa0soYDtwpCdhX4Rdc8wmfY7fYQ4iXAxEBWZtfekonwWS2lbi8kIkZ1MkWLeMgsDjGPtaiaaX6WEfxRrzJZ6odxC0igvq7TXdqw6RjtNUj96Hox6q8vcHewHSEpvLcBEinKVmXnIPOMuOzhlySl8U5DoZdMdth2xqsxnWYFPCfBZTvNwPjT3%2FN9WNsccOXVud1CGUMcTMMUZ38mFxXgh0%2F6H6b9fcoI8N6fzIItr4Vd079fIn9QH%2FLP56wLge6RFfgjvnXdIqoFTj3XFvcRmZBdcr6ko713fGOxw8RVCAoOQR8kptmXLvVJJ1wY2t%2BjyVj0iyhhsMM72bIuke8%2BCMlN3xxwK%2FbWApq3jTlJ8HGqeUyjdfvVViPr37W4mogWQ6V6%2F%2B4JecKkWi2t7zwt74KDKx27OPS1s9LZ2z72cv9uT0ONS02yHlRT9Yk9a2Sf118OF3S1a093CdMe9B2o7zHxRV3g0fnJWgKHuTase2RR4f%2Ft228OY333RtgCWm3H0aP3l1ptqNpZn4fXDfsDDjlNnJBjqkASfgUkLDMuxfTdDXF%2Bc9XtzE85OA50p5Bw67qf%2Fv6Y7UF1hFfMZFnHak0089gKE7drWFpe4SofQGh0x%2BwltRzgD35wpfBEKSzfz78xQ7BDhHRBUR9WN2bO%2BJ0LK3pmmG9gxAlAJe%2Fsg0DiL3BNVeX8jqpCprGS4D90dmrdHkqP0l2O0d0q53hM8GMG9OnGe%2FvHImAt%2BZkuOX66alywPbEnU2HVJG&X-Amz-Signature=4b2e69baff319faf98a8b87497e7310d7a6d0e4c4452f7d036a8e0f0d9fd32c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275RRU7H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ5F0cxPOOPAjuPxyPeq73yKXz8ri2VGXdMnB0XJQAKQIhAIALb739wfoDTnYmo4PCNuXrez9Y7MFEDWn1JWr3lAuZKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1ETfNsWZD5tI7lr4q3AOTSOkCS%2BgK%2FIf74GuLXBePvSnYXc6wdnnZUzhGwPGX%2FQaoi97eoxeyYV5JugqjFEXm8Z9VkqILdtQMHxjeOl4V1A83pmKUJXz5prSSQzeAa0soYDtwpCdhX4Rdc8wmfY7fYQ4iXAxEBWZtfekonwWS2lbi8kIkZ1MkWLeMgsDjGPtaiaaX6WEfxRrzJZ6odxC0igvq7TXdqw6RjtNUj96Hox6q8vcHewHSEpvLcBEinKVmXnIPOMuOzhlySl8U5DoZdMdth2xqsxnWYFPCfBZTvNwPjT3%2FN9WNsccOXVud1CGUMcTMMUZ38mFxXgh0%2F6H6b9fcoI8N6fzIItr4Vd079fIn9QH%2FLP56wLge6RFfgjvnXdIqoFTj3XFvcRmZBdcr6ko713fGOxw8RVCAoOQR8kptmXLvVJJ1wY2t%2BjyVj0iyhhsMM72bIuke8%2BCMlN3xxwK%2FbWApq3jTlJ8HGqeUyjdfvVViPr37W4mogWQ6V6%2F%2B4JecKkWi2t7zwt74KDKx27OPS1s9LZ2z72cv9uT0ONS02yHlRT9Yk9a2Sf118OF3S1a093CdMe9B2o7zHxRV3g0fnJWgKHuTase2RR4f%2Ft228OY333RtgCWm3H0aP3l1ptqNpZn4fXDfsDDjlNnJBjqkASfgUkLDMuxfTdDXF%2Bc9XtzE85OA50p5Bw67qf%2Fv6Y7UF1hFfMZFnHak0089gKE7drWFpe4SofQGh0x%2BwltRzgD35wpfBEKSzfz78xQ7BDhHRBUR9WN2bO%2BJ0LK3pmmG9gxAlAJe%2Fsg0DiL3BNVeX8jqpCprGS4D90dmrdHkqP0l2O0d0q53hM8GMG9OnGe%2FvHImAt%2BZkuOX66alywPbEnU2HVJG&X-Amz-Signature=cb23d82d6df970627c34af85d90e0a834b855d218f4e2eab625bdf0dd19b9962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

