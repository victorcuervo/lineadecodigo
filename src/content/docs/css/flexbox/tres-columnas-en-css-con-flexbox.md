---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKR4U46%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrfThh5w9elhvyjzfSBINUciUq67u36UzSR4%2BjRKoNsAIhAOv9f9ECxl9iMNATjLf8zbnWpfn%2BPsWbQnzdRn%2B7JfUrKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYYGE%2Bt2%2BS7dYv4Owq3AMK0Rh0CyC1N4rH0S2hNCJZuvkMGHv110Fm06tNytUxX3u%2B%2BmhuB%2BMvdj14XOnRM3rpb05QqUdJgEOKfI40fJ3KLzjBja02MUnWnqPRv8geG3YzXgigwUg2wn343bKPHezp%2B6BygWTRhtbz0mlbQYKSMpnhZjaA374AHFHjhYwZgti9npr94nfBgDHxZY4kceX6aJBqBzkXp5dZUJ1E0sXDdodWLepP9hOjN4XhEVElUXKYF%2BWqrDqFPgZ4ThOdZJfYcaeNoCdXLxY44vomb37jgIpv6ZkPydUO4Z7jlEzNOJ0QDI%2Bk7XaxXXdewXAb4paLrXT4hHavtqyFyIt6z7%2FLsxfK6ILHHjdJyaOcqCc7CjrE07b65ekh%2FRsRYAtYc94bknY5FutRUKLcyRReQAkhWU%2FWl1OzhyY34OgTfk6zEoYal5lFGYXhAukT8E3%2BYaKcWgzMJZqJBEwAKDWf7PdpIsAK8KYOf4uEje2LdsfLjUXaMbeKbkhSVgxbLNcKSXwru5HxFqlHbIkgdFxLlsGnLFfj%2Bqq6spK29rlYBfBEnoTRYpmR06VphGL4TUUbidLKF997KMGIMapg6mZWprYkJAIZ7WgK3gN3dWjjoC9nGbc72RIflpLEis8KGDD9xtfJBjqkAQud%2FxJOExN9xkbjCoCmgf4XNnqIpmija%2FgTFN67xF5%2FxFyvwoop8fC4czoPO3SvbEyw6vB9en97t5D8kU6nIiUl7wp%2B%2Bk%2FxbKIes7Hx5ChInB5E65Jg8lTYU7%2Bo8StibajU7bxJhU7MOFHL6Nwkycbd2pP2nz1ywwAS4JjC0odeqQPppWaGzlY4N6VV3IYfdBa6CsjzxuB9EQrdsM%2FrRIUomkYT&X-Amz-Signature=d9a07bc9ab2f7355d83001dab78d5611713b0b417a1316930e91943c6eea631e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKR4U46%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrfThh5w9elhvyjzfSBINUciUq67u36UzSR4%2BjRKoNsAIhAOv9f9ECxl9iMNATjLf8zbnWpfn%2BPsWbQnzdRn%2B7JfUrKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYYGE%2Bt2%2BS7dYv4Owq3AMK0Rh0CyC1N4rH0S2hNCJZuvkMGHv110Fm06tNytUxX3u%2B%2BmhuB%2BMvdj14XOnRM3rpb05QqUdJgEOKfI40fJ3KLzjBja02MUnWnqPRv8geG3YzXgigwUg2wn343bKPHezp%2B6BygWTRhtbz0mlbQYKSMpnhZjaA374AHFHjhYwZgti9npr94nfBgDHxZY4kceX6aJBqBzkXp5dZUJ1E0sXDdodWLepP9hOjN4XhEVElUXKYF%2BWqrDqFPgZ4ThOdZJfYcaeNoCdXLxY44vomb37jgIpv6ZkPydUO4Z7jlEzNOJ0QDI%2Bk7XaxXXdewXAb4paLrXT4hHavtqyFyIt6z7%2FLsxfK6ILHHjdJyaOcqCc7CjrE07b65ekh%2FRsRYAtYc94bknY5FutRUKLcyRReQAkhWU%2FWl1OzhyY34OgTfk6zEoYal5lFGYXhAukT8E3%2BYaKcWgzMJZqJBEwAKDWf7PdpIsAK8KYOf4uEje2LdsfLjUXaMbeKbkhSVgxbLNcKSXwru5HxFqlHbIkgdFxLlsGnLFfj%2Bqq6spK29rlYBfBEnoTRYpmR06VphGL4TUUbidLKF997KMGIMapg6mZWprYkJAIZ7WgK3gN3dWjjoC9nGbc72RIflpLEis8KGDD9xtfJBjqkAQud%2FxJOExN9xkbjCoCmgf4XNnqIpmija%2FgTFN67xF5%2FxFyvwoop8fC4czoPO3SvbEyw6vB9en97t5D8kU6nIiUl7wp%2B%2Bk%2FxbKIes7Hx5ChInB5E65Jg8lTYU7%2Bo8StibajU7bxJhU7MOFHL6Nwkycbd2pP2nz1ywwAS4JjC0odeqQPppWaGzlY4N6VV3IYfdBa6CsjzxuB9EQrdsM%2FrRIUomkYT&X-Amz-Signature=42cf5b0807d4c9a81cea02d69c2b5a8ad5aa3eac3091f9291d93718e16237c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

