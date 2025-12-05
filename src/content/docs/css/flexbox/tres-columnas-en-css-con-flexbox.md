---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CY2MNMO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FhVV6l2KqZlboljEdYsHdyfmhFFobl%2FqBjO8YaEFi8AiEA8SMY27p5MBc%2FPaiyBCQT6%2F4YqHL9ajwJXQh3pNEOpisq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCyzt5YQua22Y2HPkCrcA3Lg2hYISynEbWk5l2uq1ONCLr%2BKnZZxHIY26YjB3kzTUN29uE8wUFNWylefeS5VSDg5P1dEqzGUl9M7EzrQXrGGS52SCM8%2BfluSNGnVTFrNiK5JdfWtnfjuXw0%2BgYdjyI7dVOK8lNGxNRFbv4bPM2Hxo1XiElsXTJhV8fR58CDqpcX4bYtNVvNcA%2Bu59VVFvmJNKDlBKzcH9wYYJlUXPTcI8bIeNrF4JJNKFl%2FRx0LUflJYvGcTXtnhxwfWaEasqtHZAz3MST9mKf%2FL2CJnNHMeoPf121ooIzoRyivP21eFzO3l4%2BZUVbDOw7ZubXpDXA2q59YJGp4k%2Bp%2BJB3QL78gCRYrhsiPTwhsICEN39OUfzwZGhuxUkTmbEfWQICGYLpBntX2eHJ2a6nzz2TIpux5DsX3QsXMsJzctVtTKrPXv4B9ebPHj%2Fdq%2BWjJljiQ4dwBnxvMZa7S3kysCVLhPlwKYmQB0kglHcWWAJzVTylicNTA2rN63XwOy6lsR0ZN9QfvXSSfW7FMwCxogGZvdJDROBZnUP75uHjl1M2k6dRPOydEMSzxhQ4kpfl46t42hElmw5k%2BbJwxgxlDOsobHlyI3%2FstxNR70mEOWcn1kfghSJByetkWaJDOX46MdMOPNyskGOqUBW%2BSwoXx24nkz0YMgX5HGL0U1u2lMGW67HzVUCsonm8RwICUQFXUS0bhiAtWIlV0pdTAginfHxyuCI%2FiFugxq1s3EKr2%2F69g%2FWGDjFKu7a6fhjN39doIWBJZqthmFeZxryq8gYwJLIeknjMpsI7NUWvpxulgW9AbAItyr2tO3vDGyDhONp5yxgjWfG6gED0FN6W5e1ps7V51mZWZ2vsCIZSrQRkel&X-Amz-Signature=c92efef21ea8c8262f0804eabab94d63bebe8132c1661e05a281660f6572e8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CY2MNMO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FhVV6l2KqZlboljEdYsHdyfmhFFobl%2FqBjO8YaEFi8AiEA8SMY27p5MBc%2FPaiyBCQT6%2F4YqHL9ajwJXQh3pNEOpisq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCyzt5YQua22Y2HPkCrcA3Lg2hYISynEbWk5l2uq1ONCLr%2BKnZZxHIY26YjB3kzTUN29uE8wUFNWylefeS5VSDg5P1dEqzGUl9M7EzrQXrGGS52SCM8%2BfluSNGnVTFrNiK5JdfWtnfjuXw0%2BgYdjyI7dVOK8lNGxNRFbv4bPM2Hxo1XiElsXTJhV8fR58CDqpcX4bYtNVvNcA%2Bu59VVFvmJNKDlBKzcH9wYYJlUXPTcI8bIeNrF4JJNKFl%2FRx0LUflJYvGcTXtnhxwfWaEasqtHZAz3MST9mKf%2FL2CJnNHMeoPf121ooIzoRyivP21eFzO3l4%2BZUVbDOw7ZubXpDXA2q59YJGp4k%2Bp%2BJB3QL78gCRYrhsiPTwhsICEN39OUfzwZGhuxUkTmbEfWQICGYLpBntX2eHJ2a6nzz2TIpux5DsX3QsXMsJzctVtTKrPXv4B9ebPHj%2Fdq%2BWjJljiQ4dwBnxvMZa7S3kysCVLhPlwKYmQB0kglHcWWAJzVTylicNTA2rN63XwOy6lsR0ZN9QfvXSSfW7FMwCxogGZvdJDROBZnUP75uHjl1M2k6dRPOydEMSzxhQ4kpfl46t42hElmw5k%2BbJwxgxlDOsobHlyI3%2FstxNR70mEOWcn1kfghSJByetkWaJDOX46MdMOPNyskGOqUBW%2BSwoXx24nkz0YMgX5HGL0U1u2lMGW67HzVUCsonm8RwICUQFXUS0bhiAtWIlV0pdTAginfHxyuCI%2FiFugxq1s3EKr2%2F69g%2FWGDjFKu7a6fhjN39doIWBJZqthmFeZxryq8gYwJLIeknjMpsI7NUWvpxulgW9AbAItyr2tO3vDGyDhONp5yxgjWfG6gED0FN6W5e1ps7V51mZWZ2vsCIZSrQRkel&X-Amz-Signature=5931fd2d0ca2fff9cb1e8845a6548f3495766bc755bfe0bed24db017e11e3a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

