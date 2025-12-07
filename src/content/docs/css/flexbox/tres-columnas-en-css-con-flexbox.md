---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHAGDG2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgxqmBYgBcR7%2FxW7CR20ZUQuZXSntdveVNXZAEl06zpAiEAqZ5tXmcpmJ4VN5CyrVzNgFgsQzviWVgas3eIoyBOF5UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExYDNZlJhcCbixcxyrcAwezmKCu2qgtxkldu7i2NYpZy6I5M0ulT01aXu%2FvvOsOfiCdzy1gZAtp8wUUJGVayyaPn5q7Z8kmcxhXDcmre9acwTaAKa7poceGocEiE4ipSUcb7ee1FRLcJp5QUulKrIJcL244uK1z%2BehbBe8CdlGYgn8a%2FVzwDpXJts7r09sNu%2BgF3WJ1BOTA36Xr48w3gInt2QmTpXZlAzyRUILcBqLF77kvkjwGHHFPn4lwpg6nkdVNCf8V04ZyY5trrZHuBh0OgJjcc%2Bu7ZhztvpTaGi8edc1mHChWVqLr1GGo6%2FDXA%2Fr%2B3AoVqr6uByFXhMAFURjXNv801q%2Fji1jf8KedyZlh%2By5i3tPxstbaRoRF6EJCzCap%2FCcBzzj5U2yEKIY7MHeiripuLpkXQroiwf6Jfgu0mmzgwC4nDFazMRB1QblEnv7eo0KWy0oM6pVYGn7fb0G%2BbiVSRcv3GH5nzhigX8NUlDTaEW58bFwh0oTrZm2p3TTojd3ktLOM8p8pojqzL3nmkHkWeF5B5Rd79Qca8HwQXPAmosFoB2SVFkUEHlvEGBfdTF2o4EqzYctvK4tBmJ0Mxuqe6K5P%2B9VatrK1BNFUYEtYQ4rsPvz4DOo1laUZNLyhLaX3Wkzz8y4xMPmo18kGOqUBv9WIaR4lMtO3fwGzXIJD1JZcaMv24PbcsR%2BaxW31Yw7uV1sTKQ3JXbze8xcRyU017XvKMAvB8FHTEmcmupZOpCRimt7KkJ%2BAQZ%2Beegn5Vj%2BGEvjcf4xUhYgT95JCuzSPDkkGcykKBR5gEXTHxHI4RANxcJv%2BchPFW0JvQDnEvjijHKaGs5ugEh2hI43RHDe67dffH0jnObsdQdsrCSlOIeUYDaBT&X-Amz-Signature=382ca7d4257a4191004e0c1eacc39ce9d94cab36e5e1fe06ac304132e789bea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHAGDG2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgxqmBYgBcR7%2FxW7CR20ZUQuZXSntdveVNXZAEl06zpAiEAqZ5tXmcpmJ4VN5CyrVzNgFgsQzviWVgas3eIoyBOF5UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExYDNZlJhcCbixcxyrcAwezmKCu2qgtxkldu7i2NYpZy6I5M0ulT01aXu%2FvvOsOfiCdzy1gZAtp8wUUJGVayyaPn5q7Z8kmcxhXDcmre9acwTaAKa7poceGocEiE4ipSUcb7ee1FRLcJp5QUulKrIJcL244uK1z%2BehbBe8CdlGYgn8a%2FVzwDpXJts7r09sNu%2BgF3WJ1BOTA36Xr48w3gInt2QmTpXZlAzyRUILcBqLF77kvkjwGHHFPn4lwpg6nkdVNCf8V04ZyY5trrZHuBh0OgJjcc%2Bu7ZhztvpTaGi8edc1mHChWVqLr1GGo6%2FDXA%2Fr%2B3AoVqr6uByFXhMAFURjXNv801q%2Fji1jf8KedyZlh%2By5i3tPxstbaRoRF6EJCzCap%2FCcBzzj5U2yEKIY7MHeiripuLpkXQroiwf6Jfgu0mmzgwC4nDFazMRB1QblEnv7eo0KWy0oM6pVYGn7fb0G%2BbiVSRcv3GH5nzhigX8NUlDTaEW58bFwh0oTrZm2p3TTojd3ktLOM8p8pojqzL3nmkHkWeF5B5Rd79Qca8HwQXPAmosFoB2SVFkUEHlvEGBfdTF2o4EqzYctvK4tBmJ0Mxuqe6K5P%2B9VatrK1BNFUYEtYQ4rsPvz4DOo1laUZNLyhLaX3Wkzz8y4xMPmo18kGOqUBv9WIaR4lMtO3fwGzXIJD1JZcaMv24PbcsR%2BaxW31Yw7uV1sTKQ3JXbze8xcRyU017XvKMAvB8FHTEmcmupZOpCRimt7KkJ%2BAQZ%2Beegn5Vj%2BGEvjcf4xUhYgT95JCuzSPDkkGcykKBR5gEXTHxHI4RANxcJv%2BchPFW0JvQDnEvjijHKaGs5ugEh2hI43RHDe67dffH0jnObsdQdsrCSlOIeUYDaBT&X-Amz-Signature=b7e3ef7b6db11efc8d294e16ba65057b3f9be6ecadc2ff5e7196dbc2209f3604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

