---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS53RGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2FEPIiIA6sbQCIno5F56FgJNSRTS03XkBPpMF9nroTAiBpmQ%2Bt4tkOkvac6guQA9VKeGG0Zc2Aflnd4zyaD18QACr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM1Xzvk7wzTYo0P%2FURKtwD1vCpyHjJxSEYWopaZ4BJWbRpg0qh9lhirziR5WzoOz1gOg23UMQT5RwPhgGaTA26bQlpq40LBUVE7SJdmw1vvZi8Yk6MvU3SoBTiKAJ5z54EiDqxH3VDQ00fAOwajqoWZSrLj9MYQDTDTMDXlD1Qq6UMoyheqb%2Fk5NziEXY5B6v7cF88aB92AIWe47oI5CgM1d1H18hj%2Fav6J8hfsb00ogej7Y1MpMWpTHWU8dSaNdwK%2FTaLtFQaizEdhC5akadfhjughPRP8MyQGIRdb9zfqZ5QCu33rxheW2x75N7dpQar%2BEANchr9GR9Bwd7GtCt5W1ETE0goQqz16SdEdGyRUsnV0zT3bbLzmyOQ6JsXKCJ5OYtX5lxK8sFaVasvbI2UZFboF1W0blbsmvQNGVyiKXo7Cjv99jqo4c%2FaA%2FJHAax0t2yxriZFdNsENOcGmVCv4HbJu0mwdAw9h2fb%2FTpvtAe2s3UAi%2F2Tfep6piQSDJegIBDsTmLFAl8FXul1DXB9%2BvLBzaZ75xjGvjcvcTlT3BlnqEk%2FUgZ1omHv%2FOw8mLuj%2FTlXZ8yF0yvwBrNdUWrc32txEvlVkVfuQo6on%2B51Ni9Rtf7EaYSdaSG3y6gQejvRhQpsw7lxiMEPW4ownOvLyQY6pgFWyjQqKhyGz1ErQayGiZbZ5rKbPA6pwmBc8cSVAl3sHBgSIbOG%2FKj4y7uARwvbnown40%2FoeNHFSXkibqV1eZ6gPw%2FSDrxRx6hGKeP1ZaAhtoagDkBBx%2FecZmoQOFf6QZupjSbg9XVMC15%2B4H9%2FqNd6Mm%2FM5KL7m5u9YReZFs3FYz%2Bo3%2FM5QVkPP7G7%2BjVPmHg5irg5Yvb26YcP4ba0DRJwkxH3bwaZ&X-Amz-Signature=9c143476f96e077e72ebab542bf5a4c7afa3a15303df8ae77a4a672c7c01e8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS53RGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2FEPIiIA6sbQCIno5F56FgJNSRTS03XkBPpMF9nroTAiBpmQ%2Bt4tkOkvac6guQA9VKeGG0Zc2Aflnd4zyaD18QACr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM1Xzvk7wzTYo0P%2FURKtwD1vCpyHjJxSEYWopaZ4BJWbRpg0qh9lhirziR5WzoOz1gOg23UMQT5RwPhgGaTA26bQlpq40LBUVE7SJdmw1vvZi8Yk6MvU3SoBTiKAJ5z54EiDqxH3VDQ00fAOwajqoWZSrLj9MYQDTDTMDXlD1Qq6UMoyheqb%2Fk5NziEXY5B6v7cF88aB92AIWe47oI5CgM1d1H18hj%2Fav6J8hfsb00ogej7Y1MpMWpTHWU8dSaNdwK%2FTaLtFQaizEdhC5akadfhjughPRP8MyQGIRdb9zfqZ5QCu33rxheW2x75N7dpQar%2BEANchr9GR9Bwd7GtCt5W1ETE0goQqz16SdEdGyRUsnV0zT3bbLzmyOQ6JsXKCJ5OYtX5lxK8sFaVasvbI2UZFboF1W0blbsmvQNGVyiKXo7Cjv99jqo4c%2FaA%2FJHAax0t2yxriZFdNsENOcGmVCv4HbJu0mwdAw9h2fb%2FTpvtAe2s3UAi%2F2Tfep6piQSDJegIBDsTmLFAl8FXul1DXB9%2BvLBzaZ75xjGvjcvcTlT3BlnqEk%2FUgZ1omHv%2FOw8mLuj%2FTlXZ8yF0yvwBrNdUWrc32txEvlVkVfuQo6on%2B51Ni9Rtf7EaYSdaSG3y6gQejvRhQpsw7lxiMEPW4ownOvLyQY6pgFWyjQqKhyGz1ErQayGiZbZ5rKbPA6pwmBc8cSVAl3sHBgSIbOG%2FKj4y7uARwvbnown40%2FoeNHFSXkibqV1eZ6gPw%2FSDrxRx6hGKeP1ZaAhtoagDkBBx%2FecZmoQOFf6QZupjSbg9XVMC15%2B4H9%2FqNd6Mm%2FM5KL7m5u9YReZFs3FYz%2Bo3%2FM5QVkPP7G7%2BjVPmHg5irg5Yvb26YcP4ba0DRJwkxH3bwaZ&X-Amz-Signature=5b8fb97518896df43b563647541b841c430583b02d02c7ce22147ed464068c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

