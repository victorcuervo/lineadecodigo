---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWCGOPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICno7z7QGP8E1e1KioyzUSd7juMjFooX03%2F2qWMrhyxZAiAd8JHpxTkYYH7gz14Icmo5aiUEZs1spjm%2FOBk4F8U%2B9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTGYePCuZTUcvgCeKtwDo%2FlB6%2BCuFycyhYf%2FViUNUos9%2FscsJuLNTNHRmHHhufGQ4XM3VQaNiRHKWIypVhx2Frz97K3jdZCtOu72xvfiN4uKmyjbZ4t10eIQftNSwB0BC9JFyTFlPX2enLykD4PcjWl7Oz0MU5FnfOoFJDtWTBzAkmkYP54RHMBXssGnxrns4TeW87DOmQezn5QPYAY%2BT6L%2BcZnnbvRMn26gOrxhA3SPDGTFDkB4bl8WvHMRmhGMa5hesT%2B6G16yT1Om3UdZoSKC4CB%2BzCwZG%2FaphtuNpb6vA%2FPGqj5kNnT%2BjEZ3eJSAuBIXCFnIFE6WEUExVRywsBiDRWZtO8R4iNSFgvZ93g%2Fy9xrKGET6%2BzaubAZEmKNgH7Q7bImmVz6kLlyt8z%2BrfL3OXyF6Qm%2BU6rzeijDJs84KDsGgRzHt1Tc16ito73EbqIXs%2Fq4I9fUVEzAfH0hWepASIOdUVNYVF61xIJB41LHIbCHmgDWixXxT5mrWXe1U%2BYb2Pbv9JOb99K7yT%2Fm3SEygzKdemNAMTcaEm%2F%2FsWDv6F0iw5e%2Fkt6eOflFuYfme%2FTSYYAAFqsxXk5Yrz%2FMvyrBLfKRWotc1yU4lJpQ1ySFYPulBuzK3PY2OeFdDUFlw3rg87iwwdrH%2BVB4woP3SyQY6pgEBhBEH9ixOeIdHrmTq%2B%2Bmlr4pwlXaZztCEsjd0Dp5e%2Bh6zLOdCpcYSF0wagmZiLRkkskYeNh%2BJIIpuvH8Im4Qd3S4Dy6bg4YqMtIlSi4eK0urhaZST5q8DGUI4HGSwXXjcfsF4StJvNKbh8NUPOkVLP7yx71yJsp5Hey2WYTAsgNeiR%2BFVCyJurWXuWIWBIEdZsWI6FC5VOpzNZQnl4OoMax4h6xNL&X-Amz-Signature=a4ab93458de1e2b552eff985adb2dd0efaeec8e374f30ab54365f2495f5cdc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWCGOPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICno7z7QGP8E1e1KioyzUSd7juMjFooX03%2F2qWMrhyxZAiAd8JHpxTkYYH7gz14Icmo5aiUEZs1spjm%2FOBk4F8U%2B9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTGYePCuZTUcvgCeKtwDo%2FlB6%2BCuFycyhYf%2FViUNUos9%2FscsJuLNTNHRmHHhufGQ4XM3VQaNiRHKWIypVhx2Frz97K3jdZCtOu72xvfiN4uKmyjbZ4t10eIQftNSwB0BC9JFyTFlPX2enLykD4PcjWl7Oz0MU5FnfOoFJDtWTBzAkmkYP54RHMBXssGnxrns4TeW87DOmQezn5QPYAY%2BT6L%2BcZnnbvRMn26gOrxhA3SPDGTFDkB4bl8WvHMRmhGMa5hesT%2B6G16yT1Om3UdZoSKC4CB%2BzCwZG%2FaphtuNpb6vA%2FPGqj5kNnT%2BjEZ3eJSAuBIXCFnIFE6WEUExVRywsBiDRWZtO8R4iNSFgvZ93g%2Fy9xrKGET6%2BzaubAZEmKNgH7Q7bImmVz6kLlyt8z%2BrfL3OXyF6Qm%2BU6rzeijDJs84KDsGgRzHt1Tc16ito73EbqIXs%2Fq4I9fUVEzAfH0hWepASIOdUVNYVF61xIJB41LHIbCHmgDWixXxT5mrWXe1U%2BYb2Pbv9JOb99K7yT%2Fm3SEygzKdemNAMTcaEm%2F%2FsWDv6F0iw5e%2Fkt6eOflFuYfme%2FTSYYAAFqsxXk5Yrz%2FMvyrBLfKRWotc1yU4lJpQ1ySFYPulBuzK3PY2OeFdDUFlw3rg87iwwdrH%2BVB4woP3SyQY6pgEBhBEH9ixOeIdHrmTq%2B%2Bmlr4pwlXaZztCEsjd0Dp5e%2Bh6zLOdCpcYSF0wagmZiLRkkskYeNh%2BJIIpuvH8Im4Qd3S4Dy6bg4YqMtIlSi4eK0urhaZST5q8DGUI4HGSwXXjcfsF4StJvNKbh8NUPOkVLP7yx71yJsp5Hey2WYTAsgNeiR%2BFVCyJurWXuWIWBIEdZsWI6FC5VOpzNZQnl4OoMax4h6xNL&X-Amz-Signature=aa6df4ab8a99f618194c2a4805ae6683c26205baee679e8aeff1e66d37364d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

