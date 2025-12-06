---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMOMKZ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADYrKvCpY15IVykXIiEwYcd51hKC8e8jJN0La4KoJrUAiB%2FUn%2BGfQY2rqiaIKMdiQ22S%2FN2%2FvszrA%2BKVQh%2Bp1%2Fi1Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMzgp8IJwpcEpIIVMdKtwDrF8BeKAsbNNJeISfE3tUbtINDSo11Whn%2F9aLw161JUKbocPXZ8jPde0rEAHSD%2BU%2Fdy2Qob2fKLh%2FmFqYK4%2FBugyH42en4tZyqK532o5wXRxVOkKu9kcVA%2FvOkv7hRxxmVeKsFGHqItNSxLRnF%2BFstTuJ71tnzyCv7XgD%2BRFcLn6jn8G7EoWTGoKbRqLuoJGepgXwePRExZ5GcxFq8DWa7cM0MBVQ%2BpHZg4Y6kApiMOAEj7UQToYz0aohv6DeJTppbHuA8q2jLjmtsQjCE%2F6fIJh4cGsjpntBMkNC%2By9z%2FOXNqhrm2Q0oh98jmlVIOZCs89sd8%2BscGaDfmXY9PS%2BAq5ra%2BxZ7DqUqynCkdOYV1ulwRJvDtlBj3JCOX%2BGyooeZc%2B8EqAZ5z9p3dSk7b15m3HTFz3cNUIlF9lVO%2BmJ4YKhdSMHxXrHnQRG0oZXM935767WEMi2%2FAupM619ESjmqNxoi0pcKQqMr2CYSdlUXCZKMIhKPqaYBPTrhUlmZuPytCUtoAqxVVbU0XVHJkaMkH%2FQAju52%2Bq3hSQuqv0zYK0tar8tA8ci2Lt8d89%2BI0HC75ZfC1ntgAdPJCICr%2F%2FeF70NwIKj0loww7HNhmrHz40o6YTfzckvrEf1B7YAw%2F57PyQY6pgHxAWJm6Uw8rcAO9nbksFBTS%2BTlA%2F7HrSdPMlz%2BIDXy6ka0Dey4WEn3cJsgP9kP3wHS3XZSona4TOAagj5u3onVMGbxVJLOJWJHxc%2B0K9aIsGCWHhxuHcnfqs83RV0OszTQMaqBjMSNLYLofINXZg6FZqPr%2FmdrCFL2NL37Q1LrXsPBwJwaS30YIKHhnVXgJIB0D0WjaG1ywiZP44fIPbEKE7PwLkAa&X-Amz-Signature=a467e4f7c8b8c305c362c95986a1d5179579575f56321e43b73c2af5e6514a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMOMKZ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADYrKvCpY15IVykXIiEwYcd51hKC8e8jJN0La4KoJrUAiB%2FUn%2BGfQY2rqiaIKMdiQ22S%2FN2%2FvszrA%2BKVQh%2Bp1%2Fi1Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMzgp8IJwpcEpIIVMdKtwDrF8BeKAsbNNJeISfE3tUbtINDSo11Whn%2F9aLw161JUKbocPXZ8jPde0rEAHSD%2BU%2Fdy2Qob2fKLh%2FmFqYK4%2FBugyH42en4tZyqK532o5wXRxVOkKu9kcVA%2FvOkv7hRxxmVeKsFGHqItNSxLRnF%2BFstTuJ71tnzyCv7XgD%2BRFcLn6jn8G7EoWTGoKbRqLuoJGepgXwePRExZ5GcxFq8DWa7cM0MBVQ%2BpHZg4Y6kApiMOAEj7UQToYz0aohv6DeJTppbHuA8q2jLjmtsQjCE%2F6fIJh4cGsjpntBMkNC%2By9z%2FOXNqhrm2Q0oh98jmlVIOZCs89sd8%2BscGaDfmXY9PS%2BAq5ra%2BxZ7DqUqynCkdOYV1ulwRJvDtlBj3JCOX%2BGyooeZc%2B8EqAZ5z9p3dSk7b15m3HTFz3cNUIlF9lVO%2BmJ4YKhdSMHxXrHnQRG0oZXM935767WEMi2%2FAupM619ESjmqNxoi0pcKQqMr2CYSdlUXCZKMIhKPqaYBPTrhUlmZuPytCUtoAqxVVbU0XVHJkaMkH%2FQAju52%2Bq3hSQuqv0zYK0tar8tA8ci2Lt8d89%2BI0HC75ZfC1ntgAdPJCICr%2F%2FeF70NwIKj0loww7HNhmrHz40o6YTfzckvrEf1B7YAw%2F57PyQY6pgHxAWJm6Uw8rcAO9nbksFBTS%2BTlA%2F7HrSdPMlz%2BIDXy6ka0Dey4WEn3cJsgP9kP3wHS3XZSona4TOAagj5u3onVMGbxVJLOJWJHxc%2B0K9aIsGCWHhxuHcnfqs83RV0OszTQMaqBjMSNLYLofINXZg6FZqPr%2FmdrCFL2NL37Q1LrXsPBwJwaS30YIKHhnVXgJIB0D0WjaG1ywiZP44fIPbEKE7PwLkAa&X-Amz-Signature=3df668965f5481554f2f1a33e9ae6b878288cbcb32b350effb8c00d439a462fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

