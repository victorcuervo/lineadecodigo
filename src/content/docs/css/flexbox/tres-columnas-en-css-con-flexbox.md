---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HNW4Y3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3iZ%2BjRj6SS%2Fpa9UiPxpF%2Bhwx1%2FsA1jVQ0D%2B1GGWK%2FvAiAD68f0nGsdv2WoZQJwqiADUDAyHIFXZdqTYD8nRfihHiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe4ym5U5c3GTiI78bKtwDHBKP7ogZeu8Zl0Nn6jpoYqjGMysIgUBTY%2BmNU6K8DXnamPatj0oLeslKsSPorIckJgIGjHNbzsePEVvZNET0doZm%2BoUph36NahYLK67mO1S2g7ZLX%2F2jz1myp2NgXh99YhwsovmBVcG1XqNfR5kmyE%2BG8oenWwAQftWL8c0rvGOHYoWJ86zT26qM%2BIwqEtjiGHaGm8UJWyGkIp0PJPvaiBEAeBkBmW38yHLHlM38fKObFuf9J%2F9c4riPYTD%2FJBuJR8QDvKbRpHMhm0%2FOTvFv2hOberwOnnNw1QRW5J2Dz6deCH4gsxw4ewDBpfqBo%2FL8ft57PWlvLqt9EGzA2Kiwt%2F5GlDByQuKneYYt6DZ6%2BpyBVrYvepSONJEmPWUgVZeTBtA%2BmI803L4CS8kvJDllrO4dLSYtXcyBMnXA%2FfzNiCR8butoCWP8bcPVUQgodzl3S%2FZQ5rzoNl9Qu%2Ba12a3dENexQPZZ2fcDDtAKDXOUupAa1Hf6vgMU83l6vj1m6eWWT1EqP1vqLSBxdNdn2vErGOSRZnrMhuFn3ke7o%2BRQgZg9H1vB14HXR50xdT1Bexnvxuf8UKRnArPidFckyeux%2BbsltTBG6g%2BcIh9lXSulZJdsYPWv%2BU%2BrDZFofnMwjrTZyQY6pgGmWbl0TMX%2FklTfw0VCZ%2FjtjhPB%2FytpLxNth95fAtpl5ccornJ5VpLttJOXIXNB12n5S4sl8sR1%2BkEP9N66URppPuMjCLDIMcBFixeqbRlb1LGhpTszK85NXbbZedw8rOo6pge4cLhDTxNvz6%2FJda3zJa1dfD6Ml3Njs1MSCZcnMqmkvDi9SMRGH%2FsGSm9deVHmxjUFO6rmhcJP%2FVbu7PhN2wZVYqQH&X-Amz-Signature=9fe1c72b20b695f9b540a2ec775282574996b6a7bba305888eade51673b31a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HNW4Y3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3iZ%2BjRj6SS%2Fpa9UiPxpF%2Bhwx1%2FsA1jVQ0D%2B1GGWK%2FvAiAD68f0nGsdv2WoZQJwqiADUDAyHIFXZdqTYD8nRfihHiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe4ym5U5c3GTiI78bKtwDHBKP7ogZeu8Zl0Nn6jpoYqjGMysIgUBTY%2BmNU6K8DXnamPatj0oLeslKsSPorIckJgIGjHNbzsePEVvZNET0doZm%2BoUph36NahYLK67mO1S2g7ZLX%2F2jz1myp2NgXh99YhwsovmBVcG1XqNfR5kmyE%2BG8oenWwAQftWL8c0rvGOHYoWJ86zT26qM%2BIwqEtjiGHaGm8UJWyGkIp0PJPvaiBEAeBkBmW38yHLHlM38fKObFuf9J%2F9c4riPYTD%2FJBuJR8QDvKbRpHMhm0%2FOTvFv2hOberwOnnNw1QRW5J2Dz6deCH4gsxw4ewDBpfqBo%2FL8ft57PWlvLqt9EGzA2Kiwt%2F5GlDByQuKneYYt6DZ6%2BpyBVrYvepSONJEmPWUgVZeTBtA%2BmI803L4CS8kvJDllrO4dLSYtXcyBMnXA%2FfzNiCR8butoCWP8bcPVUQgodzl3S%2FZQ5rzoNl9Qu%2Ba12a3dENexQPZZ2fcDDtAKDXOUupAa1Hf6vgMU83l6vj1m6eWWT1EqP1vqLSBxdNdn2vErGOSRZnrMhuFn3ke7o%2BRQgZg9H1vB14HXR50xdT1Bexnvxuf8UKRnArPidFckyeux%2BbsltTBG6g%2BcIh9lXSulZJdsYPWv%2BU%2BrDZFofnMwjrTZyQY6pgGmWbl0TMX%2FklTfw0VCZ%2FjtjhPB%2FytpLxNth95fAtpl5ccornJ5VpLttJOXIXNB12n5S4sl8sR1%2BkEP9N66URppPuMjCLDIMcBFixeqbRlb1LGhpTszK85NXbbZedw8rOo6pge4cLhDTxNvz6%2FJda3zJa1dfD6Ml3Njs1MSCZcnMqmkvDi9SMRGH%2FsGSm9deVHmxjUFO6rmhcJP%2FVbu7PhN2wZVYqQH&X-Amz-Signature=ce0b7e67d97f37216082b7e908127c77f29587294d79f16e3a8d2f491a23e9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

