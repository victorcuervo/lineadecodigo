---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557SCLM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbS4JLYu7CvKj7wMwibMJoAPXNUUViLinKUlGIhIVKmAiA%2BvliEDtNoeymP5dPM3KI6NKDaUvk0q%2FcT7jJydpAEDCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCFZz8DzgoeKIhwy8KtwDHI%2F3juLrg1KLw0%2FOI3NQ2qTEPJEp0chDZDCrQpQMPByFydRj4GN3E2obY%2BJTsBlaenztA9XUr3fFf9ffiZcIn9OvL%2B7mZPhMsJyixz8EDK676hojm4msprTAcz4SVcTH87aEcW6NWlqRzg7ZFjzD69S24GX%2Fx2nDfbLJcLn1tlCtnst60EkdncMWi%2FuhB9qkjmAGn%2FQ0zCL8e2Wq%2F8Hy4zzPevfhQ2Fjy0nLdl%2F80JuUyAHfnPvAvm8izXcR%2BeYVHZb1UvtlFeb%2B0kZ%2FCt8JiOZaCcfFSVn5TbAWP074VKF72SzSDcWBgG8%2BRSG4wRWAtrf6i%2FkZK%2Fa0r2MyJz6JzZTbPNQSgRwH4EpxkkDmPYUi3DCV0nKEMvQk81N1vwUfld0xynbQr%2BdEKSO9untxFNAiJvC%2Bzo5cII3hWMnb90l6NK96lswEdpQUBnmiU4uN2XRsOzvaA9CDY64wqJmbypeyRoy4tjrJVGXlJ%2FN0JX6ybde%2BTJmGdIg0rdw%2BLwtgcU%2Frc0vhTu%2FlqK3zZmuvrMLkPVWsL3VsIOFTTEkM9ZCnZKHDggrIOO3%2FEDdGHaS3iiBy%2BrrWzM7aR%2FdAG0b9%2FnVpdDpXePWUOW88OMizSZPcDm067IfQRZ%2BTKkYwv6%2FJyQY6pgEVCTDqiHBqgk3EJlVlLGlrS05I1vri19z5LIAhimgz13pZrrWvXemt7XHgDbhp8AGfLSlOFakBmVkH%2FW47e8yjzinUnuKMoV9%2F%2F06gSN%2B5J41cxLDWj6BNeKuEnRvf0AaWtqeyLhk%2BXof9SA5bw72MgySc0rmhsbtHQ2SUAOSi1q2gDBYaXOYd0lgnIA5xeaXZUVjoahs8k%2F8nSvrIB9tLMyFbtv3l&X-Amz-Signature=f1e4b757f5a84842f601baf76d5b488c246afabcba272350c1e5290fe9931726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557SCLM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbS4JLYu7CvKj7wMwibMJoAPXNUUViLinKUlGIhIVKmAiA%2BvliEDtNoeymP5dPM3KI6NKDaUvk0q%2FcT7jJydpAEDCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCFZz8DzgoeKIhwy8KtwDHI%2F3juLrg1KLw0%2FOI3NQ2qTEPJEp0chDZDCrQpQMPByFydRj4GN3E2obY%2BJTsBlaenztA9XUr3fFf9ffiZcIn9OvL%2B7mZPhMsJyixz8EDK676hojm4msprTAcz4SVcTH87aEcW6NWlqRzg7ZFjzD69S24GX%2Fx2nDfbLJcLn1tlCtnst60EkdncMWi%2FuhB9qkjmAGn%2FQ0zCL8e2Wq%2F8Hy4zzPevfhQ2Fjy0nLdl%2F80JuUyAHfnPvAvm8izXcR%2BeYVHZb1UvtlFeb%2B0kZ%2FCt8JiOZaCcfFSVn5TbAWP074VKF72SzSDcWBgG8%2BRSG4wRWAtrf6i%2FkZK%2Fa0r2MyJz6JzZTbPNQSgRwH4EpxkkDmPYUi3DCV0nKEMvQk81N1vwUfld0xynbQr%2BdEKSO9untxFNAiJvC%2Bzo5cII3hWMnb90l6NK96lswEdpQUBnmiU4uN2XRsOzvaA9CDY64wqJmbypeyRoy4tjrJVGXlJ%2FN0JX6ybde%2BTJmGdIg0rdw%2BLwtgcU%2Frc0vhTu%2FlqK3zZmuvrMLkPVWsL3VsIOFTTEkM9ZCnZKHDggrIOO3%2FEDdGHaS3iiBy%2BrrWzM7aR%2FdAG0b9%2FnVpdDpXePWUOW88OMizSZPcDm067IfQRZ%2BTKkYwv6%2FJyQY6pgEVCTDqiHBqgk3EJlVlLGlrS05I1vri19z5LIAhimgz13pZrrWvXemt7XHgDbhp8AGfLSlOFakBmVkH%2FW47e8yjzinUnuKMoV9%2F%2F06gSN%2B5J41cxLDWj6BNeKuEnRvf0AaWtqeyLhk%2BXof9SA5bw72MgySc0rmhsbtHQ2SUAOSi1q2gDBYaXOYd0lgnIA5xeaXZUVjoahs8k%2F8nSvrIB9tLMyFbtv3l&X-Amz-Signature=d8f51b0b9d7c20dac511eca58962de28e800b0289b333149f1a1dc91d0be7eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

