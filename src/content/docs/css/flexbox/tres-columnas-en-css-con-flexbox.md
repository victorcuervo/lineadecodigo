---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PST47J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyl%2BtL%2FbLJItOOl1zD1wq6x4MBxqMnZiv3jO1Q%2Bfht0AIgepgho8QpnVOW6%2B3wmH5dfjBEZwZt%2BEv8TUF6fRKNyj8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYsDyZYn35eQ6yEzyrcA7swytn4vOIyie9LLEBCOxyEiNYB%2B6wCY0UrMbmPVIeEsNi2cszNG%2Fcz3YeF12rzlJNJrsLFUI%2B4JPNgtRr3AMbL3BGSPwwIfbBCi4hALvb%2BxR6CO2OXIPcIxBtnzOq5RZZQ5a8vRyKIoii5JippjghgixfPaR67bSHiYoRCADxi%2FxgO9DLLiYzr2BuA7M%2BUHX%2B%2B7JOIIRw5tqtnU9kyJYgPwpVZ9ktL7hOjVMIJnFfFsfuQYGVX7goVsEYZbiX6VjyilCCIeTlpCsyv4GNChj7TQCqnG5K%2FfazmATAD2v%2FsTXp7KZJ61bRydCS0Lao73IY2Hf%2Fxx9RFViYrl35j1DXKfqfI6q1Y9X5zXe1VIM99FecBouvuuHteQxkX2uqwDTtGyOxdUfHzpfZiC2I5IF3imDebyU4%2F0N%2B%2B2LZddLS5SMsl%2Bq5My6WK5aGS%2FTRuhSqtp7oPzBBkt1ENf%2B3a1fIdDpbCdJbPRCwcy5eduggVHVZUs2HcjuxWXUEv9Tw%2FpQZ0wsUjp2AMslWeyE0Wday2WBXPnrlrNJLTanrJbDsAUr%2B0iYELFZlEXthcjyjNn91M5Gt18zRAqyCd4Sfllgx7l3WDvbKvkUs0MoYa%2BqBE8R%2BAsy013W2Ktdd4MK%2BF2MkGOqUB8xn8cNcZ7YMEY8mjlboDqEuLSVHvoqep7aYzDFmy8tbrWY1rNaZWMvb94psvTKLdFa%2B1oCXTWorV3aj8WJVe3KT%2BMtqT8W7uOSJuj71cxiXsOoLECx8FOniMC837y0ypk9znj%2FpMzCwXVY6gYCW3mVzZ1QE2qUMbY%2BU8NvnZv%2BByX9dWs2MwZEPvtMAfhzCpIre9xguAzzpCBZiCDMwcDxiCF4Nt&X-Amz-Signature=da1fc5d78043ee9d2df4b1465fb0e1c86ad4498e57d258633a7b7e362ac6b00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PST47J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyl%2BtL%2FbLJItOOl1zD1wq6x4MBxqMnZiv3jO1Q%2Bfht0AIgepgho8QpnVOW6%2B3wmH5dfjBEZwZt%2BEv8TUF6fRKNyj8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYsDyZYn35eQ6yEzyrcA7swytn4vOIyie9LLEBCOxyEiNYB%2B6wCY0UrMbmPVIeEsNi2cszNG%2Fcz3YeF12rzlJNJrsLFUI%2B4JPNgtRr3AMbL3BGSPwwIfbBCi4hALvb%2BxR6CO2OXIPcIxBtnzOq5RZZQ5a8vRyKIoii5JippjghgixfPaR67bSHiYoRCADxi%2FxgO9DLLiYzr2BuA7M%2BUHX%2B%2B7JOIIRw5tqtnU9kyJYgPwpVZ9ktL7hOjVMIJnFfFsfuQYGVX7goVsEYZbiX6VjyilCCIeTlpCsyv4GNChj7TQCqnG5K%2FfazmATAD2v%2FsTXp7KZJ61bRydCS0Lao73IY2Hf%2Fxx9RFViYrl35j1DXKfqfI6q1Y9X5zXe1VIM99FecBouvuuHteQxkX2uqwDTtGyOxdUfHzpfZiC2I5IF3imDebyU4%2F0N%2B%2B2LZddLS5SMsl%2Bq5My6WK5aGS%2FTRuhSqtp7oPzBBkt1ENf%2B3a1fIdDpbCdJbPRCwcy5eduggVHVZUs2HcjuxWXUEv9Tw%2FpQZ0wsUjp2AMslWeyE0Wday2WBXPnrlrNJLTanrJbDsAUr%2B0iYELFZlEXthcjyjNn91M5Gt18zRAqyCd4Sfllgx7l3WDvbKvkUs0MoYa%2BqBE8R%2BAsy013W2Ktdd4MK%2BF2MkGOqUB8xn8cNcZ7YMEY8mjlboDqEuLSVHvoqep7aYzDFmy8tbrWY1rNaZWMvb94psvTKLdFa%2B1oCXTWorV3aj8WJVe3KT%2BMtqT8W7uOSJuj71cxiXsOoLECx8FOniMC837y0ypk9znj%2FpMzCwXVY6gYCW3mVzZ1QE2qUMbY%2BU8NvnZv%2BByX9dWs2MwZEPvtMAfhzCpIre9xguAzzpCBZiCDMwcDxiCF4Nt&X-Amz-Signature=2064673b42d1aa5ea675f0a4bb6ac2301bdb177bd909182226e2d61fb42c1f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

