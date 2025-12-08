---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNF25TZX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJGVbXVSgCN40daCljeTHisKsCn%2BkYH8rjfWrFUSO0UwIhANXgmUIvU8x6BK1diF6BJIpChwDKIj%2FPVyMSXdy%2FZNzXKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGul0BcHRVSoeRhlMq3ANlkEBTK4NXdO0%2BPEAHaWPmkUdt1aLlVvV97eZl%2BACD47VD5Z38JzRQNHrX8U%2FSHpVFu0IbHXaWAHRsD%2BOJRaSIaeN8emXOTK9LqKYMqjCqDK%2BZXlixiHnJOUbDHBdBU%2Foe791HH9cmFQwsnZoQpMkhAYJuirBBRRqKvM%2BWLZ72eibgqiVyyr%2Fmub1u2rbDg9u7reqWm19f%2BnbxNL1Q1uafFQPedeUT9QAzJgi4uPxs43pZcFVOWQ4Kan5MoTpy9MCiS81h00PzOopJflSJ2LninEgp5c4EDAyM779rakVV8pGzMPD1V7BlmT1hhncYUH7fmB9J%2F27lgAp5lbeEKOne1i0IvHaSRygS7Lnm0awZYZgkugqYZWOn%2BSo%2B4fl0%2FUx13hI82%2BA6wUYZg7vVgZMsZSlyLPldUa2ep6VQgy87I6FZD06qXtidn1iQgSV4ZpSPba6nh2Id4wuDzA6hKGV8JPUM%2FCDn2Crpsrj1mh%2Femtgkcl%2BWeUzqV9a045G%2F2TBHMmM4PPHCpChJH2agUa%2FIXnVxIPOueRf%2FvzDp9qTSkYoqEs%2BgQmtrbNodcNmLsaAtplWgFBtizHjCxEnomk0axak1Wn33PnTeI%2Bh7dzBWppoADstl2yepOeef7TDt7dnJBjqkAVQ82q9J5u4KaKHd7BbCpEKCJUsKheQxkGpac8MncVQH2cpLLNxjs0%2BeHXxYJVx1eMJeQHXPVT%2Fc1k%2FtCA62nanpRmBQFixjH2MqUrqm%2FJilk6M%2BwZz0ZCwolYTRniycfu68KMzEzywHMofahrYgzgi6vIe9n2YJHuCAh6YZf70p90PmELhLcMOjYGl%2FB0CY5k4YEt5rZECnoADORRwcYp6nUYkw&X-Amz-Signature=7a2803a6ced82ebdc6b94ca9147cae61ebe4a3c21b60812825cb6230b7252785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNF25TZX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJGVbXVSgCN40daCljeTHisKsCn%2BkYH8rjfWrFUSO0UwIhANXgmUIvU8x6BK1diF6BJIpChwDKIj%2FPVyMSXdy%2FZNzXKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGul0BcHRVSoeRhlMq3ANlkEBTK4NXdO0%2BPEAHaWPmkUdt1aLlVvV97eZl%2BACD47VD5Z38JzRQNHrX8U%2FSHpVFu0IbHXaWAHRsD%2BOJRaSIaeN8emXOTK9LqKYMqjCqDK%2BZXlixiHnJOUbDHBdBU%2Foe791HH9cmFQwsnZoQpMkhAYJuirBBRRqKvM%2BWLZ72eibgqiVyyr%2Fmub1u2rbDg9u7reqWm19f%2BnbxNL1Q1uafFQPedeUT9QAzJgi4uPxs43pZcFVOWQ4Kan5MoTpy9MCiS81h00PzOopJflSJ2LninEgp5c4EDAyM779rakVV8pGzMPD1V7BlmT1hhncYUH7fmB9J%2F27lgAp5lbeEKOne1i0IvHaSRygS7Lnm0awZYZgkugqYZWOn%2BSo%2B4fl0%2FUx13hI82%2BA6wUYZg7vVgZMsZSlyLPldUa2ep6VQgy87I6FZD06qXtidn1iQgSV4ZpSPba6nh2Id4wuDzA6hKGV8JPUM%2FCDn2Crpsrj1mh%2Femtgkcl%2BWeUzqV9a045G%2F2TBHMmM4PPHCpChJH2agUa%2FIXnVxIPOueRf%2FvzDp9qTSkYoqEs%2BgQmtrbNodcNmLsaAtplWgFBtizHjCxEnomk0axak1Wn33PnTeI%2Bh7dzBWppoADstl2yepOeef7TDt7dnJBjqkAVQ82q9J5u4KaKHd7BbCpEKCJUsKheQxkGpac8MncVQH2cpLLNxjs0%2BeHXxYJVx1eMJeQHXPVT%2Fc1k%2FtCA62nanpRmBQFixjH2MqUrqm%2FJilk6M%2BwZz0ZCwolYTRniycfu68KMzEzywHMofahrYgzgi6vIe9n2YJHuCAh6YZf70p90PmELhLcMOjYGl%2FB0CY5k4YEt5rZECnoADORRwcYp6nUYkw&X-Amz-Signature=c223af54766cd76d28dab9349ff6ad5aa1f61efd6212fba5568ceeb0ea70f9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

