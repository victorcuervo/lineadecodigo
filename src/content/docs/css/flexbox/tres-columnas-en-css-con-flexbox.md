---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSJTRKX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMOMUQoH4JTfl5XXpW%2F20u21E6iCzB0c1OH81jipJlHgIhAPXjyi45VAtLsBxroWz%2FIl%2BPKOJaCSENnh%2F3KB27eQMzKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87%2BlpMCGQOdx8Kwoq3APyheWYcTECaYso%2FwW2T63QaP9vynOBduGUeZ4UgDtoBj95BvKGUAqAtK4hk%2FZ5Gx6u%2BPCstDBtCbrYiLzsgok%2F8JlnmOYoLetMuaCkXfyUUAYzwBzopTuaZ1qYdwByIHT%2BRgtyE%2B2wSG0e9wdpPo4NFDSPjefBbDQ4JInfHR6ub2apKuvxxOA%2BmHGj08TVr1JUnpwEkOuXkF%2BoXDqe89Boj3J96OtuGWkEdfMJWSoUFFKDovLp%2Bg3PPZqabkkIuGw2H0GZincUdGw7AXY4AthrEqnrbH07ZZQ1x6AnfU%2BOmainpsvQgqWfP%2BfbkTtMClyvbLtgbFOuDHUJ%2Bkhev9akaVsM%2FyXlrO24YJUBdpSeuSVzhdUOeOSj1yN0lq2qbaqRrL8j%2FgsMan0Rla1PVifGNH2LCkyJKyE4HcBYORVmsEclDTGMUMtqs2d0qJ2wAqhwJGUhys8DBI6XuhzyAODP2smABRca8ll%2FzTThuTlJLnWkb5nuQmLVPVgBNGD550crbCXYnflVka9HBL00PxumgHyonsmBmUbXg380ce9%2BNlUwOVUE%2Bg2terg%2Fil84zcP3GTFmzOFntJtdaxXKoJo5iDjBNT7D1ATNS7OQB80GroLHgw5CDqgwKIg3ZzCIotTJBjqkAVOq1yN7%2BmarCtom%2FQ3iIxrZMag3fML%2BRZNThei3JvCcAibZGfb7nxxtzySDsm4flbETPO7BS4tN%2FAr457MaPP4JeDrZF6evgaOgMEppbzJvitduT9XyQ62yTUvzYKRgUhOJZSDWLAFIkbOqLz1meP61wKg77EOge1u07TYxl94Yu270ivhgHcabK0SBV5HS%2BkMPS3A%2BT9t96iKHPTaBlinKUPfO&X-Amz-Signature=87ba43d26d1b788ecf2b86cb27de43a43090be762f42c83c7d84a7335ed17d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSJTRKX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMOMUQoH4JTfl5XXpW%2F20u21E6iCzB0c1OH81jipJlHgIhAPXjyi45VAtLsBxroWz%2FIl%2BPKOJaCSENnh%2F3KB27eQMzKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87%2BlpMCGQOdx8Kwoq3APyheWYcTECaYso%2FwW2T63QaP9vynOBduGUeZ4UgDtoBj95BvKGUAqAtK4hk%2FZ5Gx6u%2BPCstDBtCbrYiLzsgok%2F8JlnmOYoLetMuaCkXfyUUAYzwBzopTuaZ1qYdwByIHT%2BRgtyE%2B2wSG0e9wdpPo4NFDSPjefBbDQ4JInfHR6ub2apKuvxxOA%2BmHGj08TVr1JUnpwEkOuXkF%2BoXDqe89Boj3J96OtuGWkEdfMJWSoUFFKDovLp%2Bg3PPZqabkkIuGw2H0GZincUdGw7AXY4AthrEqnrbH07ZZQ1x6AnfU%2BOmainpsvQgqWfP%2BfbkTtMClyvbLtgbFOuDHUJ%2Bkhev9akaVsM%2FyXlrO24YJUBdpSeuSVzhdUOeOSj1yN0lq2qbaqRrL8j%2FgsMan0Rla1PVifGNH2LCkyJKyE4HcBYORVmsEclDTGMUMtqs2d0qJ2wAqhwJGUhys8DBI6XuhzyAODP2smABRca8ll%2FzTThuTlJLnWkb5nuQmLVPVgBNGD550crbCXYnflVka9HBL00PxumgHyonsmBmUbXg380ce9%2BNlUwOVUE%2Bg2terg%2Fil84zcP3GTFmzOFntJtdaxXKoJo5iDjBNT7D1ATNS7OQB80GroLHgw5CDqgwKIg3ZzCIotTJBjqkAVOq1yN7%2BmarCtom%2FQ3iIxrZMag3fML%2BRZNThei3JvCcAibZGfb7nxxtzySDsm4flbETPO7BS4tN%2FAr457MaPP4JeDrZF6evgaOgMEppbzJvitduT9XyQ62yTUvzYKRgUhOJZSDWLAFIkbOqLz1meP61wKg77EOge1u07TYxl94Yu270ivhgHcabK0SBV5HS%2BkMPS3A%2BT9t96iKHPTaBlinKUPfO&X-Amz-Signature=d8e465d6a0d2c590d4d436e4948c0bcdb658af20f51638894711ab274bbe16f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

