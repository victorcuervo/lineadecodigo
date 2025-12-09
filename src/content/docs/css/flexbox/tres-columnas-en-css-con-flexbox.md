---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVVNKOK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKYTQEC7J7Wx3FB5PK2L0DWqBlw3GbZjoo5PSIHhxlmQIhAKjOT24IqTQFHhyoQtF6fhFVC1eFaGoVT4QdwUrgf91OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6Cs%2BdotD7Y6yt0KYq3ANP5QHNgebct2MCXXIYpLmz22PH4ctJp2JUI3CdrNO2nYex1qKMRS0Wytpp16JgEe4g5rfX78NwpqMtuUrYixdX%2F8IVq1Beeta1U%2BSR7bPwQu%2Bqul7z8KRmf5GhAbUX1haWTHQfVNBV%2BQjEs9cy4MU698HPyU2KDTq9E%2BPc0Z9hHgPGwxcF2vuR%2B8GS5B4jeoJmx6I5jbSHdW%2Fq7jCVEwnYxaJRUDTRuNnhwP6yIOmoL3AB4bsg9bISjZLAgS5vPQ6VigLC%2B45ncaXrzjgoW%2B9c90I7AOlYfBHwO1ubVU%2BTGsVFr1CfiILhmtbkR44QTiFbSSHoJUhwIdmvN%2FAhKc%2Be0KKr57MUAp0Ueys7XSdicj0LLjYUvWWzrs1IZznmsEy3KHXJrB0vIAJlYw1z6StMQmKJW5ep0nMq1NMRZ3Ah%2BTok0ZUgE5p7cEOoLRredNwdmz7GVlyewOEN%2Fi6PF%2Br4EJneL8yFXqCFUphQrntT0fl3L%2BDd2jVQzHScNthbIhTBUk%2BhlMh%2FAVn6zpUQzbCTMaEBCiBuBoZ%2BVfdcCwWz3IEERtCQhe2hHg2hUft6wGL%2F27aYYS%2FH6phR8ShsqNk24p0xPK91D9XblKh%2Bnj2dGiC7kVm0ad3sKhBI3zCGrt7JBjqkARjFz%2F1nmEea97Yj6dHHUT7snql2v3%2FeRCxCrkS5EQXfwVG%2Fp8gXhlZCsNm4AiIgjjPM0NNYgNdPAKsHb33PlkbrzKLoGZLWoDq7EO3o7myrXlToRJEhLXWDNG42JjEofeXeM8ubsHoE%2FJT078ALtXwjghV6Us1WpY0VBttt8t%2FQF3DvbKqKHr8eBybsbeFqDvTJXmeN5ZOAi7VQgFyR1fd3KYtb&X-Amz-Signature=7fe55a5052b4b6844b3f970a5a763b771ec2684cfad636a3d26929662abe5b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVVNKOK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKYTQEC7J7Wx3FB5PK2L0DWqBlw3GbZjoo5PSIHhxlmQIhAKjOT24IqTQFHhyoQtF6fhFVC1eFaGoVT4QdwUrgf91OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6Cs%2BdotD7Y6yt0KYq3ANP5QHNgebct2MCXXIYpLmz22PH4ctJp2JUI3CdrNO2nYex1qKMRS0Wytpp16JgEe4g5rfX78NwpqMtuUrYixdX%2F8IVq1Beeta1U%2BSR7bPwQu%2Bqul7z8KRmf5GhAbUX1haWTHQfVNBV%2BQjEs9cy4MU698HPyU2KDTq9E%2BPc0Z9hHgPGwxcF2vuR%2B8GS5B4jeoJmx6I5jbSHdW%2Fq7jCVEwnYxaJRUDTRuNnhwP6yIOmoL3AB4bsg9bISjZLAgS5vPQ6VigLC%2B45ncaXrzjgoW%2B9c90I7AOlYfBHwO1ubVU%2BTGsVFr1CfiILhmtbkR44QTiFbSSHoJUhwIdmvN%2FAhKc%2Be0KKr57MUAp0Ueys7XSdicj0LLjYUvWWzrs1IZznmsEy3KHXJrB0vIAJlYw1z6StMQmKJW5ep0nMq1NMRZ3Ah%2BTok0ZUgE5p7cEOoLRredNwdmz7GVlyewOEN%2Fi6PF%2Br4EJneL8yFXqCFUphQrntT0fl3L%2BDd2jVQzHScNthbIhTBUk%2BhlMh%2FAVn6zpUQzbCTMaEBCiBuBoZ%2BVfdcCwWz3IEERtCQhe2hHg2hUft6wGL%2F27aYYS%2FH6phR8ShsqNk24p0xPK91D9XblKh%2Bnj2dGiC7kVm0ad3sKhBI3zCGrt7JBjqkARjFz%2F1nmEea97Yj6dHHUT7snql2v3%2FeRCxCrkS5EQXfwVG%2Fp8gXhlZCsNm4AiIgjjPM0NNYgNdPAKsHb33PlkbrzKLoGZLWoDq7EO3o7myrXlToRJEhLXWDNG42JjEofeXeM8ubsHoE%2FJT078ALtXwjghV6Us1WpY0VBttt8t%2FQF3DvbKqKHr8eBybsbeFqDvTJXmeN5ZOAi7VQgFyR1fd3KYtb&X-Amz-Signature=7e3f25c13981a2ef8977f4bab734741727cf969cb943731a71a86b1a88bac2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

