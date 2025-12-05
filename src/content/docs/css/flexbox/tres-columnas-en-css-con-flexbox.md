---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRLZDNL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7MMri8CSznDFHjFqejbylqqTrQyy6L%2FeFhJWtUoJSoAiEAs6yeFbI7hONWuprmMNSFMScxMO1GfMs1pDS4SyufmvQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJd1Iqm52VVJKayUvCrcA5MEkqxMRCvhku3gD6xVbKhiNKZpm%2FbqmCCnA4eoqQKdXGbA4f7r0kbXhJpgJT1fidZUi3DIC3WWR0oXyO0JlLMg1Q0BP7Xn1TIp8hWEvxEQSWy4kiJ6TVRfeJMv0D7EQqEIST1nXEysGoGVxx5yY%2Bt%2FwXbP0b9B0rgdxL6PiZSI1uTcxxRMpfAY7k%2BP2wHHTFMplYGhvaxlbmG3gYZVXrKQzz%2BV%2FRQKp9WqvQQ1yC9%2FKs7ygMjwy3Hyqo1VO%2FmaUNs3ZpnaD8XWMCzdUJh%2BPtzUS3%2FC8wB42UoPIYSRwTOVNocITM51nK2Z5%2B%2BplfQL4AvlA9mBBcxoSBgufNIlNaNzNP7aJN9mcARMfgbtViniESCFb%2Bah6bl8PXLwMuvAqa4TfOs8OSpHPlWaApQyuzMewHyqn7xxRpppK9en1134HUOBHzOlukkDuYk5YjB%2BbMIs78uB8v9UttUgJZhKNa%2FP1GKZR%2FceMnWuTfx2Shpjzw5LrBIdRVnuInrlaXTzd1h1ZwsHNb%2FtWciii3yU5t7raaGFmt2g%2BxSHJnyOpcsDifNYZbyQiCYIFRc6fDUnJh3v8Q1jr7ZOBrzhNANTyoEXUL4nAfXaNqNi%2Bq5ZqXI9%2FnOHNoK%2FpDEKMcYzMN7MyskGOqUBgoBgeNr9qwKvvjjVRdwPIEg5PgOtP7fOkgWrpZaphXk2u0dwKz1pi71o8GDKAIHezQKawu5GY3fQViM90fRWzis6nNsL%2FysNA7x2XWAWB02FMUyjmeItx0pwUsrpqodXV7bIfWDgP3ly6vzLAeEIPq7GhAuUYKMJv4ePS3l8mxyihWreuvo%2BojpOZR9s%2BTE4bBdJiFuuK00qt4G%2B6VaU2wP7mc%2Fl&X-Amz-Signature=71c510b82804e2b124cc559e4c4b844504631570f8e4f89c0ed172a0565f3f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRLZDNL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7MMri8CSznDFHjFqejbylqqTrQyy6L%2FeFhJWtUoJSoAiEAs6yeFbI7hONWuprmMNSFMScxMO1GfMs1pDS4SyufmvQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJd1Iqm52VVJKayUvCrcA5MEkqxMRCvhku3gD6xVbKhiNKZpm%2FbqmCCnA4eoqQKdXGbA4f7r0kbXhJpgJT1fidZUi3DIC3WWR0oXyO0JlLMg1Q0BP7Xn1TIp8hWEvxEQSWy4kiJ6TVRfeJMv0D7EQqEIST1nXEysGoGVxx5yY%2Bt%2FwXbP0b9B0rgdxL6PiZSI1uTcxxRMpfAY7k%2BP2wHHTFMplYGhvaxlbmG3gYZVXrKQzz%2BV%2FRQKp9WqvQQ1yC9%2FKs7ygMjwy3Hyqo1VO%2FmaUNs3ZpnaD8XWMCzdUJh%2BPtzUS3%2FC8wB42UoPIYSRwTOVNocITM51nK2Z5%2B%2BplfQL4AvlA9mBBcxoSBgufNIlNaNzNP7aJN9mcARMfgbtViniESCFb%2Bah6bl8PXLwMuvAqa4TfOs8OSpHPlWaApQyuzMewHyqn7xxRpppK9en1134HUOBHzOlukkDuYk5YjB%2BbMIs78uB8v9UttUgJZhKNa%2FP1GKZR%2FceMnWuTfx2Shpjzw5LrBIdRVnuInrlaXTzd1h1ZwsHNb%2FtWciii3yU5t7raaGFmt2g%2BxSHJnyOpcsDifNYZbyQiCYIFRc6fDUnJh3v8Q1jr7ZOBrzhNANTyoEXUL4nAfXaNqNi%2Bq5ZqXI9%2FnOHNoK%2FpDEKMcYzMN7MyskGOqUBgoBgeNr9qwKvvjjVRdwPIEg5PgOtP7fOkgWrpZaphXk2u0dwKz1pi71o8GDKAIHezQKawu5GY3fQViM90fRWzis6nNsL%2FysNA7x2XWAWB02FMUyjmeItx0pwUsrpqodXV7bIfWDgP3ly6vzLAeEIPq7GhAuUYKMJv4ePS3l8mxyihWreuvo%2BojpOZR9s%2BTE4bBdJiFuuK00qt4G%2B6VaU2wP7mc%2Fl&X-Amz-Signature=8f3fefa8a75a4aaaf950e6f4912ec51643dd64e68cd5bdc9ed7384fd25a682f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

