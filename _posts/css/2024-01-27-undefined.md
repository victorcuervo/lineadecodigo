---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WUEK2G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDiAvY4qfZRAHvIJYKlcfJX84A0nVsXMy1b5qJlUY663AiBaPJZKGRmTV6NXRytu%2FgtLZtKiBtgdGjPxmioZScl1XSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMu%2BSrjd9bqdBJRZmcKtwD47O59XKdC5MF5TDF6Iz8Uy1bFsR7QtAu0UST2bL0ryIZIKVUa5WvLvlbPeNjXyoI2budDOxZRmN8yGkwSgwgcwNgNhGJHP9PQXEjIakuP058xqtRuAIPJw%2F6EYBXYzsQnc%2F8j9k1IDYB7eZl2G5gwcSlUS2NG%2FazPAKqnAC7%2F33uwaUS341HVkVplJKYl2sXjFxEUqAHYuGxnt%2F%2Fyg7G1s8fwypCztUzqHo16xw3crKkfc0tQqsJx3sRsHupzqp5IxcgNl1FApk43zbKHnzQ0DSPrcnQjUJCppXjuaU5aDLWz%2FbXOzGNi%2B9fT87h%2BZCD8xYUgMhU90f8Sz8ZfCrVu6EIqrpuymTc9oDCXElrratq9MYEzcQluC9otwMGnxfHkW1gej%2FtsadErmB2Ap%2BWY6%2B1wdioTihPBztnOArj8ku2GgfAljDtO8t0HsOOlNmEvCXuiNH360pv9aKitCx9X94BpDkdoS%2BpPC%2FwHp83MfUzstBzGulGgcAFXbtpajCLGpHURcYqFltFWBfrmyukCmC0FnSVTrREU1Ytj5JUy7z5BoFIpnGd4At6mpL3CV9LOBg%2B3MEy3LXIuSYR6KofDSLefI2j8iNPu9kZvUCbmth%2B4NuF4yDB3B%2BQHe4wyMHByQY6pgEUMjOSvPilrZr3ohY%2BmrNcRgo9w5F5pDQEnB3783DFu3iExJTo%2FcO4zKEauD9Z7IvjXin66Ohk8z%2BOs6fhBC61UdnBygdC8wB7yWOzkLA3PpBZ3CgHVk2xpwEFxH3W5KrjSlnYEcLgl7bTJ8OMvmoXSeFbNW35a9Oynqqep6cmvcBGwZvtHOY1TuE9dX6K797VZQ1w91WHYB5oV4j4X%2BhveCQfYT9c&X-Amz-Signature=7516a3e3c503c0b294dd6d03e3aa83084b743cbaacfa685947302344490b27d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WUEK2G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDiAvY4qfZRAHvIJYKlcfJX84A0nVsXMy1b5qJlUY663AiBaPJZKGRmTV6NXRytu%2FgtLZtKiBtgdGjPxmioZScl1XSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMu%2BSrjd9bqdBJRZmcKtwD47O59XKdC5MF5TDF6Iz8Uy1bFsR7QtAu0UST2bL0ryIZIKVUa5WvLvlbPeNjXyoI2budDOxZRmN8yGkwSgwgcwNgNhGJHP9PQXEjIakuP058xqtRuAIPJw%2F6EYBXYzsQnc%2F8j9k1IDYB7eZl2G5gwcSlUS2NG%2FazPAKqnAC7%2F33uwaUS341HVkVplJKYl2sXjFxEUqAHYuGxnt%2F%2Fyg7G1s8fwypCztUzqHo16xw3crKkfc0tQqsJx3sRsHupzqp5IxcgNl1FApk43zbKHnzQ0DSPrcnQjUJCppXjuaU5aDLWz%2FbXOzGNi%2B9fT87h%2BZCD8xYUgMhU90f8Sz8ZfCrVu6EIqrpuymTc9oDCXElrratq9MYEzcQluC9otwMGnxfHkW1gej%2FtsadErmB2Ap%2BWY6%2B1wdioTihPBztnOArj8ku2GgfAljDtO8t0HsOOlNmEvCXuiNH360pv9aKitCx9X94BpDkdoS%2BpPC%2FwHp83MfUzstBzGulGgcAFXbtpajCLGpHURcYqFltFWBfrmyukCmC0FnSVTrREU1Ytj5JUy7z5BoFIpnGd4At6mpL3CV9LOBg%2B3MEy3LXIuSYR6KofDSLefI2j8iNPu9kZvUCbmth%2B4NuF4yDB3B%2BQHe4wyMHByQY6pgEUMjOSvPilrZr3ohY%2BmrNcRgo9w5F5pDQEnB3783DFu3iExJTo%2FcO4zKEauD9Z7IvjXin66Ohk8z%2BOs6fhBC61UdnBygdC8wB7yWOzkLA3PpBZ3CgHVk2xpwEFxH3W5KrjSlnYEcLgl7bTJ8OMvmoXSeFbNW35a9Oynqqep6cmvcBGwZvtHOY1TuE9dX6K797VZQ1w91WHYB5oV4j4X%2BhveCQfYT9c&X-Amz-Signature=e2aae5b163c7b7b5e07bd87fbcc843c0d473944c2674d18bf57035a512e754c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

