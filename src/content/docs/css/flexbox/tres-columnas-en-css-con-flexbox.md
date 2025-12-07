---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4TPJVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0v9%2BteVL6DMf%2FVco4OZ0wVf8cv05O6EtNlREo7%2B8KCAiAG%2BRGsR9DXHbrL0mCWXtffH%2Bj4tDkkwWuh3NAcdElMdiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8M5pbt22ps74BI3xKtwDOT97MfJEPK%2Fyug80QQ7%2Fk%2BTDrX8j5%2Ftv2d49FFElOdNET6ciGkSbUCb3y43eqlrC4aEArtQeLyhRhWtI3fLia75fKvTm%2BlfkJVPW4y3Wa2DnvOgWler%2BvunT%2FCObKzHXIBWxmlzc1ho1E3HeK83YxUH1iuhNhzk4jWZLbqVqYtFtB4tkZ3q7YNng%2FJcMpZb6RSLFg2Mg3DZbuZs34xrJN6yBp%2BT1ZIWVEl%2Fu1vzirbPEfa7Y3A4AvcmGCp9YaLmjGVuvylHMwt7Hpc5uqsUo2ObmzvAwOW0RASyPMNjPROo8jlw3JnS0XfmqeECapE5GzDFSWXgRK47mYbYreXHuFSdgK6LUwvPx5K5h5qzGlzMaYTGUye8TIFCSMhwBTdsTrgLb9ESzIMSU5JgeNhS2MEDQx8oACJhFVxgCzyVbotpbyWJ8157kYDO%2BBWaInkRYCEV6ZcwolSAfkRy8y9RmKUqBsEzx8VL8h2GYrkQNrnWFQ%2FFAj9YTbmltZmduqsRl9tmUXidAZCE%2FEOpx3Sp%2BfFmQhXWQ1MXkN7YGxgCA4ZAhxhlBAlFe97WbAURkMjPf0%2FZv%2BeFoHLdvuV8TUmjBelAvzMMSS0FMA7AMUuNpu6ug%2FGwmgejI4e15Sdcw0p3UyQY6pgGaqZpXJcsOMEOet0dNulpIO69yzLXoNxxpnByY8BZH5ksZgmo4lvn126sEcquZqdqJQgrVGCGzM1NuBF9RlPRHliqpoYWImvQW64EJe6lM3X0rLZiICyT0bpNZaEkLlwQqAdituWP58oD48GezhD50DeN3IthfCANq%2B1DJkcC1%2F6TFHh51PQFNyE9jzbenOhemb2mENvv13tX9vvuDceInwuAc6Y2u&X-Amz-Signature=0d17648c2368b56824b55ca2d9c012a35d67251e08d8a8dd9b95321b274afb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4TPJVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0v9%2BteVL6DMf%2FVco4OZ0wVf8cv05O6EtNlREo7%2B8KCAiAG%2BRGsR9DXHbrL0mCWXtffH%2Bj4tDkkwWuh3NAcdElMdiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8M5pbt22ps74BI3xKtwDOT97MfJEPK%2Fyug80QQ7%2Fk%2BTDrX8j5%2Ftv2d49FFElOdNET6ciGkSbUCb3y43eqlrC4aEArtQeLyhRhWtI3fLia75fKvTm%2BlfkJVPW4y3Wa2DnvOgWler%2BvunT%2FCObKzHXIBWxmlzc1ho1E3HeK83YxUH1iuhNhzk4jWZLbqVqYtFtB4tkZ3q7YNng%2FJcMpZb6RSLFg2Mg3DZbuZs34xrJN6yBp%2BT1ZIWVEl%2Fu1vzirbPEfa7Y3A4AvcmGCp9YaLmjGVuvylHMwt7Hpc5uqsUo2ObmzvAwOW0RASyPMNjPROo8jlw3JnS0XfmqeECapE5GzDFSWXgRK47mYbYreXHuFSdgK6LUwvPx5K5h5qzGlzMaYTGUye8TIFCSMhwBTdsTrgLb9ESzIMSU5JgeNhS2MEDQx8oACJhFVxgCzyVbotpbyWJ8157kYDO%2BBWaInkRYCEV6ZcwolSAfkRy8y9RmKUqBsEzx8VL8h2GYrkQNrnWFQ%2FFAj9YTbmltZmduqsRl9tmUXidAZCE%2FEOpx3Sp%2BfFmQhXWQ1MXkN7YGxgCA4ZAhxhlBAlFe97WbAURkMjPf0%2FZv%2BeFoHLdvuV8TUmjBelAvzMMSS0FMA7AMUuNpu6ug%2FGwmgejI4e15Sdcw0p3UyQY6pgGaqZpXJcsOMEOet0dNulpIO69yzLXoNxxpnByY8BZH5ksZgmo4lvn126sEcquZqdqJQgrVGCGzM1NuBF9RlPRHliqpoYWImvQW64EJe6lM3X0rLZiICyT0bpNZaEkLlwQqAdituWP58oD48GezhD50DeN3IthfCANq%2B1DJkcC1%2F6TFHh51PQFNyE9jzbenOhemb2mENvv13tX9vvuDceInwuAc6Y2u&X-Amz-Signature=27fb463b30bb55b9e246059bb7b471112e67ea335928408a4fe14fec76b72ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

