---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAAQL4H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCViIH06z1sM751I8SSfSzpL6vtljVN10Y6zgaWWk%2F9ngIhANJ%2BFJxkyDn9AK8pgJakD645nv9WAbSxzUiFrRydJRuVKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSJQuY8Hx%2FH7LUQg0q3AOcNFTaISfphZkQXcJbZMwt7LgoCG4WogSqi5AwC526Ckf6pNf8Gf2GmLBT6bd%2BAF9QqOfAJ20VdZz5E6A7Ha%2FGl3pdh2xaYCp9w0wMd1%2Bwdtgm3iK2ijjeu%2BY%2F0NH0RgcD2K8eGRsQkwNP4kHT7O7a0VzC%2FbtDtCbe5w7ri%2B7u4%2FbPZDDqHGbcHew%2FOzsFwF0Tl1WvhRiufoJI5N57rEU3IjXheFndeqK0PCnGRY625LktYOvWGgh%2BUcxlF36af6EAapo7eclf%2BurPz%2FO8qkpA5vSLyFGldNs0Gibxx4XJUaeYRAhilFUDwtlihzvTirJ4ouYvKM8zEPaIF4gESWEkNWC%2FO%2FlPbdkSk5t38yhISVcRl1kyKuIV67X0DJ6h4lcO4Cfkbl0gb5br7W1d6p%2BmG0pT9HXP61ehjXDovdHpN%2BRPqGyo8WnCCPD3kxxbavl6HOwql52OUrsSWJuXC4xiaWRSeq%2F1Kpc916I9ekOH0ytHgk4hy7n7UUp5FYf8PgFv8o%2Bj3NsmkEYgNW9f2wZR7bWT3Ap8yEnM1Vm%2FQvbrcikQkISvsHalK2rdqphO%2FDUmqL0nLT0BC9RHZPAg1gb3eJg%2F5YMNL7BZ7EBcKoDhaCUdBJkeyAEVpupFkzCxotjJBjqkAR2Uh1e1HoWd0LBuTDmPiRSs6HASb8L1KsdFBYkAUT78AT6R1JeUWGyywIWWFJca0wOHEQPfh%2BLWBOm4kZrN3y79JEFfPJ7yl5MgjwRSLezgeYBmBecHZSLaqn2KsNdiDF84HWRl%2FDHoAPGvS5O89IfCTkDxhssTUN%2FhHbaAqme08Qb9zrAi%2BZgl2YTIo1qr%2FbN0zX%2FmvId5knMyRDD%2BeUer9wgt&X-Amz-Signature=bb64d79166ce767edde0afee2ddf4bffacadadc22d65380457b2c70574dce35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAAQL4H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCViIH06z1sM751I8SSfSzpL6vtljVN10Y6zgaWWk%2F9ngIhANJ%2BFJxkyDn9AK8pgJakD645nv9WAbSxzUiFrRydJRuVKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSJQuY8Hx%2FH7LUQg0q3AOcNFTaISfphZkQXcJbZMwt7LgoCG4WogSqi5AwC526Ckf6pNf8Gf2GmLBT6bd%2BAF9QqOfAJ20VdZz5E6A7Ha%2FGl3pdh2xaYCp9w0wMd1%2Bwdtgm3iK2ijjeu%2BY%2F0NH0RgcD2K8eGRsQkwNP4kHT7O7a0VzC%2FbtDtCbe5w7ri%2B7u4%2FbPZDDqHGbcHew%2FOzsFwF0Tl1WvhRiufoJI5N57rEU3IjXheFndeqK0PCnGRY625LktYOvWGgh%2BUcxlF36af6EAapo7eclf%2BurPz%2FO8qkpA5vSLyFGldNs0Gibxx4XJUaeYRAhilFUDwtlihzvTirJ4ouYvKM8zEPaIF4gESWEkNWC%2FO%2FlPbdkSk5t38yhISVcRl1kyKuIV67X0DJ6h4lcO4Cfkbl0gb5br7W1d6p%2BmG0pT9HXP61ehjXDovdHpN%2BRPqGyo8WnCCPD3kxxbavl6HOwql52OUrsSWJuXC4xiaWRSeq%2F1Kpc916I9ekOH0ytHgk4hy7n7UUp5FYf8PgFv8o%2Bj3NsmkEYgNW9f2wZR7bWT3Ap8yEnM1Vm%2FQvbrcikQkISvsHalK2rdqphO%2FDUmqL0nLT0BC9RHZPAg1gb3eJg%2F5YMNL7BZ7EBcKoDhaCUdBJkeyAEVpupFkzCxotjJBjqkAR2Uh1e1HoWd0LBuTDmPiRSs6HASb8L1KsdFBYkAUT78AT6R1JeUWGyywIWWFJca0wOHEQPfh%2BLWBOm4kZrN3y79JEFfPJ7yl5MgjwRSLezgeYBmBecHZSLaqn2KsNdiDF84HWRl%2FDHoAPGvS5O89IfCTkDxhssTUN%2FhHbaAqme08Qb9zrAi%2BZgl2YTIo1qr%2FbN0zX%2FmvId5knMyRDD%2BeUer9wgt&X-Amz-Signature=2f2cbacc9dbb97de449be0712b676226e3d259dcb23de071e9eaa6b439b8af6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

