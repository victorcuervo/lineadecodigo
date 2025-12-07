---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRSJ6E3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHkuCSSVhUXJCD03ROZvj6pM2G1h%2BnKJTmqhSh9OgTgIhAPND2AiAm68012M6igiCfeLK8EsSfOmiYBSHOhcplcqKKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD8m0OTF6lIXQL6CAq3AOXriwx%2BNvDD5jrbNyiGj8JFt9kpczFbbUgjyz5m5kIiCasWMnobwJ9eeEg1L8F%2FHTPSG3ra%2Fq66JNOfPlwECkaCU7kpXRWAJDIOBMH%2FPKjts2FW1jP1GZluv32MEXmyzEHE2%2F1NtN81JTtcx0rLMKTMd64TIdV6rEkjvI1PaTRKr31Wyvb9hltoTr7Xc4%2F1ZukSM6eHaBYvp4AdXKhDdcC4aXCBi9%2BP3xR6luUKuphzqWDILUtt5syxK2FNqzgCF%2FQXS72MNKeJ4UfE9vAR%2Flt66OvMmwSOwZvduJDiwY%2FpEZEFNqTNmMA87FxMEl7%2FkwdszzbUS6Hu2VIOQdPTyKxh3YWzXe5HRZ%2BV%2F5j7xCuKrEfabUwDPdZ7vGOJCcpHCOy%2B7uRLs5zyVosW46JyohsPD7NxlaI0Z%2BFFErMh7bJqC%2B6IoyneJnKUjIUlE7pcNsR8djkSy74d7mmX3eGYpht6Y1HXZV%2BBvVQA2foDb1O8UdH6fmJpM4EjwlamBTSWYpl5sFIfoPo8xJ%2FKg%2BkOD7XVr5PuwBvROKYeC5qgHqQYLMTHhUHS2JcRUM%2BKPsjZ%2F86c5WMe7uIJ44IDwp%2FSMQKzkgUTVOQQ4IpwTJYV6yxflLMqGyQlDTXUqkb5jD0mdTJBjqkAR90xVD3YHJCWE3fU%2Ftx612kUlC%2FA%2FRPX%2FSQdLYZOAHB90UOlhXMFcxaFy%2BvKZFx5HqkQIQ1P8pZRtPlfDw5szHMYOy%2B5gQsTwpXId2kjuEI2C508z1Yvafc7syTa6fn%2FFggcT1rmq0x48ZM162nm2OkdLgBU3JT3TRD%2FQM1eBzjX9b6SFjkR6AL%2B3JXGk3Oc4RALG%2FSAC%2B8KsoShtnvh4BLpUFS&X-Amz-Signature=3f9d0a467880994d4df02cf937e09348ad9583e36f7022520db3dfbd8bb9f4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRSJ6E3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHkuCSSVhUXJCD03ROZvj6pM2G1h%2BnKJTmqhSh9OgTgIhAPND2AiAm68012M6igiCfeLK8EsSfOmiYBSHOhcplcqKKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD8m0OTF6lIXQL6CAq3AOXriwx%2BNvDD5jrbNyiGj8JFt9kpczFbbUgjyz5m5kIiCasWMnobwJ9eeEg1L8F%2FHTPSG3ra%2Fq66JNOfPlwECkaCU7kpXRWAJDIOBMH%2FPKjts2FW1jP1GZluv32MEXmyzEHE2%2F1NtN81JTtcx0rLMKTMd64TIdV6rEkjvI1PaTRKr31Wyvb9hltoTr7Xc4%2F1ZukSM6eHaBYvp4AdXKhDdcC4aXCBi9%2BP3xR6luUKuphzqWDILUtt5syxK2FNqzgCF%2FQXS72MNKeJ4UfE9vAR%2Flt66OvMmwSOwZvduJDiwY%2FpEZEFNqTNmMA87FxMEl7%2FkwdszzbUS6Hu2VIOQdPTyKxh3YWzXe5HRZ%2BV%2F5j7xCuKrEfabUwDPdZ7vGOJCcpHCOy%2B7uRLs5zyVosW46JyohsPD7NxlaI0Z%2BFFErMh7bJqC%2B6IoyneJnKUjIUlE7pcNsR8djkSy74d7mmX3eGYpht6Y1HXZV%2BBvVQA2foDb1O8UdH6fmJpM4EjwlamBTSWYpl5sFIfoPo8xJ%2FKg%2BkOD7XVr5PuwBvROKYeC5qgHqQYLMTHhUHS2JcRUM%2BKPsjZ%2F86c5WMe7uIJ44IDwp%2FSMQKzkgUTVOQQ4IpwTJYV6yxflLMqGyQlDTXUqkb5jD0mdTJBjqkAR90xVD3YHJCWE3fU%2Ftx612kUlC%2FA%2FRPX%2FSQdLYZOAHB90UOlhXMFcxaFy%2BvKZFx5HqkQIQ1P8pZRtPlfDw5szHMYOy%2B5gQsTwpXId2kjuEI2C508z1Yvafc7syTa6fn%2FFggcT1rmq0x48ZM162nm2OkdLgBU3JT3TRD%2FQM1eBzjX9b6SFjkR6AL%2B3JXGk3Oc4RALG%2FSAC%2B8KsoShtnvh4BLpUFS&X-Amz-Signature=bf15f919add85e64401bd6823ad6103f0fe8911f2de2c81d9fdecf6b41b4d575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

