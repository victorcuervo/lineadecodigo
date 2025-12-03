---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4KFSHA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCz6F%2F%2FgCwF7hA4wq5AH3UANGCpCeUDUQRo4FHSauGEdwIgQ8Sc0E74ZuTdiWzIPBgB9F%2Bhije94Opjdk23hk8IUM4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDAw2frXvLoCcRpZy5ircA98%2BSzq15sM0kjPPfJ7ho0uxTekpG36CsjCGT%2BGiaLmm%2Fe3mB8w%2BKIX2IHw1fTUFBN9cnvg2nXM5sXfKtZe0Tab89CuTfGo%2FeNSstF%2F19kfcfFQ92%2FP%2BppcZjfzC3zD52VF0VSGsBeHpfGIJXUXdXAAS30teDPkLI%2FSVML%2Fr7jZ5nQVrsH1DNR1%2FbzQrmau6kMpdxJTm66KVtOBrticshjDWpf85iIVrxjoYbaVjdlcLHAn28kuzH%2BUtpK56u8Yj9pBmALz1aoQPQ6oVSQx85eQ6QdKmIObQl%2B%2FNrXvVt7e6jCY%2FDrlV1dp5d28lGajzBNHj8SmCMjCcc%2B228eb0rrEfA4%2FHdgbdeGyrKwb4%2FqFLK%2B0DOMTtd5Utye6dC4vkBw6JLiXieWabneyQhoTseEsfVwv9%2Flt2xeJ%2F15aFegBD6kwvyzm3SgsIfUM5eWxfttCStVeQCpDTAJqy574IRsdwCmPs5xU5BCrQI3LxCmliyx0U6YfCXehOO2SQxuYsjYIRML7RpQq6ujIPB4C%2FEotwLu7NT2JpmaTMQcaR0CNlIfYJfwrfa3Q2YRF4NFm6fnQmWePtvr9dznO1zxmP%2BhuCtS8la4vV1FcrS6LZO5lgwdkh%2B%2BVrXCAQlp5vMIi5v8kGOqUBEkrLKicj8E1XnKWUr3TTYv8KfUmBrVP1cUbKKrIm0W334Bm5U5Sc9ywrkcWK4vbEyA%2FPmYRryIaZIHKu2hVLhSt5nwg0IjT2m9D8ysIjrbbt88IqhWYJ2bdFx%2BIF0258EX7A%2FNyMlcb0IDrX7n%2BUaLNUr8WNKvY5kXXIrnnkwOtJHz%2FvelTc%2FK5NsJcbJO2e7J6pwfvm99OxmdqY9LEgsGjqS244&X-Amz-Signature=88c665731640fae50ab3682e2e137ab0d61466464e531cf021d7dd30326ed314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4KFSHA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCz6F%2F%2FgCwF7hA4wq5AH3UANGCpCeUDUQRo4FHSauGEdwIgQ8Sc0E74ZuTdiWzIPBgB9F%2Bhije94Opjdk23hk8IUM4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDAw2frXvLoCcRpZy5ircA98%2BSzq15sM0kjPPfJ7ho0uxTekpG36CsjCGT%2BGiaLmm%2Fe3mB8w%2BKIX2IHw1fTUFBN9cnvg2nXM5sXfKtZe0Tab89CuTfGo%2FeNSstF%2F19kfcfFQ92%2FP%2BppcZjfzC3zD52VF0VSGsBeHpfGIJXUXdXAAS30teDPkLI%2FSVML%2Fr7jZ5nQVrsH1DNR1%2FbzQrmau6kMpdxJTm66KVtOBrticshjDWpf85iIVrxjoYbaVjdlcLHAn28kuzH%2BUtpK56u8Yj9pBmALz1aoQPQ6oVSQx85eQ6QdKmIObQl%2B%2FNrXvVt7e6jCY%2FDrlV1dp5d28lGajzBNHj8SmCMjCcc%2B228eb0rrEfA4%2FHdgbdeGyrKwb4%2FqFLK%2B0DOMTtd5Utye6dC4vkBw6JLiXieWabneyQhoTseEsfVwv9%2Flt2xeJ%2F15aFegBD6kwvyzm3SgsIfUM5eWxfttCStVeQCpDTAJqy574IRsdwCmPs5xU5BCrQI3LxCmliyx0U6YfCXehOO2SQxuYsjYIRML7RpQq6ujIPB4C%2FEotwLu7NT2JpmaTMQcaR0CNlIfYJfwrfa3Q2YRF4NFm6fnQmWePtvr9dznO1zxmP%2BhuCtS8la4vV1FcrS6LZO5lgwdkh%2B%2BVrXCAQlp5vMIi5v8kGOqUBEkrLKicj8E1XnKWUr3TTYv8KfUmBrVP1cUbKKrIm0W334Bm5U5Sc9ywrkcWK4vbEyA%2FPmYRryIaZIHKu2hVLhSt5nwg0IjT2m9D8ysIjrbbt88IqhWYJ2bdFx%2BIF0258EX7A%2FNyMlcb0IDrX7n%2BUaLNUr8WNKvY5kXXIrnnkwOtJHz%2FvelTc%2FK5NsJcbJO2e7J6pwfvm99OxmdqY9LEgsGjqS244&X-Amz-Signature=322153ea84a5dc7f917ff5d912396a7f01c9287f11c31ba532f9a79dfd567f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

