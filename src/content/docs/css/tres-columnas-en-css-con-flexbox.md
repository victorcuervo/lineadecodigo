---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMISK72%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDm5dqy0810QeT4lljdtJ%2B7WVNzeQ0tXDErgV%2F%2F%2F%2FrCfgIhAJVDlrjw%2F3oLzFVD5D38rf4z0wDkDnh1fk4nuof%2Bxv9aKv8DCDQQABoMNjM3NDIzMTgzODA1IgxIu58Q3As33hCZ1pkq3AMRIXV1QrLcpfGLeVjNeZwJW%2BVP6WRQp9CTxyxUs9eHpTKuvL9ApaGcHLnLUXoKoHqu6%2BPJmuU1PLHgFrI6kNo7LRaXH9Z%2F5X%2FZ36XTzUHZkgRGlex2HnTpVpSfdVkROOiFymH8vJ4rb3jz9LTONMlig5upMYTscDZxn0wUbRmkLy5PXjA2rwKLHiSi0hwy1bXGdLCieoDPwd%2B6B6v%2FCds7n3ORU3mrnCRaJuuHZ7CQbtdM1%2BQCXtGo3UQcGfN7gK2Wnfas1jFeUI5KjdZ6exu6G0kvEsqw%2FzYc2CtWCd2u%2FUPM90olXiGN%2FAZdaSxmOTXMJL%2BB4V5A72DjsiUqDh6TJ8Z0wZ3U86R8OkdE9dn%2Bem0onjwoLGwauRlZSv%2F%2BGOBzFux8iRi8VyWm5qbwh6nBCK1AvcSpnHK5aa8kfPHY54IRbAaLOdTwoutI1j%2F09dxPhUL7L9v%2BC3fgC4HU17jyVpuHRIL%2BAIPn1TuFm%2BIhOkwdLFe2PHd8kIorgyPFVBFfqXn0Cl8HuP8ZwUfQRGMnAtk8qSuEjqAMtukuMdArnmsB8no67CPtwmpjmDLq9b0F7ipM8Vrhg0AlylLGcYxb6MbUwg0a4X0hrjLW5xk4M%2FK5hfU%2FfL47ssDzEzCdkcLJBjqkAadcyEUrDZsmfut1J4YXSb4EhSrq6PhbOGIjkHPaq9b0LFY4Bq%2BiHWRyBYIDUioS0578y8jRzUedu0t0YI90GcWFviJUkVmNPs%2BBL2bTbKW5%2BYz%2B9as8HhKryaMAuFWIokStPZ%2BnywRbqEXAfGjKJw1GddEz31eR8xpcUrtNCqTtqycH5Ian%2FnvoaGWKJ4UZiM1c0U5poozf1VQ2wulah3nuoRxd&X-Amz-Signature=4d09a79370a373bed127a2e02e156a2f9228d1493948fd0ead6599e3924b5142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMISK72%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDm5dqy0810QeT4lljdtJ%2B7WVNzeQ0tXDErgV%2F%2F%2F%2FrCfgIhAJVDlrjw%2F3oLzFVD5D38rf4z0wDkDnh1fk4nuof%2Bxv9aKv8DCDQQABoMNjM3NDIzMTgzODA1IgxIu58Q3As33hCZ1pkq3AMRIXV1QrLcpfGLeVjNeZwJW%2BVP6WRQp9CTxyxUs9eHpTKuvL9ApaGcHLnLUXoKoHqu6%2BPJmuU1PLHgFrI6kNo7LRaXH9Z%2F5X%2FZ36XTzUHZkgRGlex2HnTpVpSfdVkROOiFymH8vJ4rb3jz9LTONMlig5upMYTscDZxn0wUbRmkLy5PXjA2rwKLHiSi0hwy1bXGdLCieoDPwd%2B6B6v%2FCds7n3ORU3mrnCRaJuuHZ7CQbtdM1%2BQCXtGo3UQcGfN7gK2Wnfas1jFeUI5KjdZ6exu6G0kvEsqw%2FzYc2CtWCd2u%2FUPM90olXiGN%2FAZdaSxmOTXMJL%2BB4V5A72DjsiUqDh6TJ8Z0wZ3U86R8OkdE9dn%2Bem0onjwoLGwauRlZSv%2F%2BGOBzFux8iRi8VyWm5qbwh6nBCK1AvcSpnHK5aa8kfPHY54IRbAaLOdTwoutI1j%2F09dxPhUL7L9v%2BC3fgC4HU17jyVpuHRIL%2BAIPn1TuFm%2BIhOkwdLFe2PHd8kIorgyPFVBFfqXn0Cl8HuP8ZwUfQRGMnAtk8qSuEjqAMtukuMdArnmsB8no67CPtwmpjmDLq9b0F7ipM8Vrhg0AlylLGcYxb6MbUwg0a4X0hrjLW5xk4M%2FK5hfU%2FfL47ssDzEzCdkcLJBjqkAadcyEUrDZsmfut1J4YXSb4EhSrq6PhbOGIjkHPaq9b0LFY4Bq%2BiHWRyBYIDUioS0578y8jRzUedu0t0YI90GcWFviJUkVmNPs%2BBL2bTbKW5%2BYz%2B9as8HhKryaMAuFWIokStPZ%2BnywRbqEXAfGjKJw1GddEz31eR8xpcUrtNCqTtqycH5Ian%2FnvoaGWKJ4UZiM1c0U5poozf1VQ2wulah3nuoRxd&X-Amz-Signature=9311c5b564c0679b9086a4350ae3cebb441cbf837a0f1e9205423c448e19098c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

