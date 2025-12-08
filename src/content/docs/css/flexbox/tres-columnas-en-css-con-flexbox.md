---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UX25SXA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCi%2BGMv16Bn5RMqoPXHx4pYk38cinCWprT3%2BZ3VUU%2BAAiAH%2FOhi4YSjqpB%2FdXYXkD2bXfQfvJccdoYU49a81ztNjiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FU3s5Q%2BFQI4Fa64KtwDNC%2FA4UMzfNkNu4hvbH5RwCpFC4iOZvkN1epDflyg%2F3rzSyS8qtK%2FdPmG0%2F6V7ybm8Uek%2F%2BZU5yPPiabQGD1%2BxRFXIgD2DD%2Br49b056tqKREHOyKQDz1sEtk1n8F1GNPIL4BWyKNY%2BRp7Q%2FL1HJX9mZRuw6acMSIp96ewUp7k30LheEOMTxLFYwfolzlYAA2LxdN3k3rgMi0GOJvLN8qlL8RY3kdSxE8PwipCG4o3hNFKr%2BKCsS19hhuGAx05P6KZO5mL2XBcjFGghcA3E9SBOJs4DRwA60ECU6cUyFrI4Gs2%2BAa1n3jKNiAta1k834Xg5iecaKOBUJQlJmiYW5gwAUmjg2njYRXY3PFGW6K2n7IzStazceLK6a0kTSkmRzlgUKA1SfVRRQjUkB%2FLtrX2vTfyoh77W1O7xIlD%2BLvLn9z5iFW8IVXjz8h72HgLAxJ9h0G2MYvgvYiWYeCU6ZjPGF%2BKWYPwj6dzPputzOqKk6ez9LTDJeLCBxd0uNu8wqvnlSFrB%2FtE4zz%2BYGTg0x3ERT1mO6kgG9GMJBYuNQDiiCfWIA6Lnzxp%2FwQsSFB2z%2FqnAJMQn%2BUDVzX6leN1%2FiOVnpCM7%2BwiDkNxkNl%2FO%2Br3apn%2Buz3oN%2BcU0E7acRww1obcyQY6pgE60a%2B3vmlwsBaDLoE2eQOqWj0uaH1Y0DBOH%2Fpb33R9L%2FvaLscMdlAwFSEzO%2BqCFN3WLWiOukESNFu2sw2KjVTaeiJGhBBEDmdOygGnEKwRekZOVyKJWXR%2B%2BmpWCPxXa0i%2BIHPnfBnHYoFJiUmvo1f%2F%2FAYLfWj05A6q2oLtW0kReNyxiHR3v%2BSEQUPc%2BUbtp1Tm6fF82%2BVNhU6K%2BVtUlh9NWwhNHuh6&X-Amz-Signature=aa63516f13efb945c472b2b11d01934999a53351cc77d55ebc27003a686f8029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UX25SXA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCi%2BGMv16Bn5RMqoPXHx4pYk38cinCWprT3%2BZ3VUU%2BAAiAH%2FOhi4YSjqpB%2FdXYXkD2bXfQfvJccdoYU49a81ztNjiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FU3s5Q%2BFQI4Fa64KtwDNC%2FA4UMzfNkNu4hvbH5RwCpFC4iOZvkN1epDflyg%2F3rzSyS8qtK%2FdPmG0%2F6V7ybm8Uek%2F%2BZU5yPPiabQGD1%2BxRFXIgD2DD%2Br49b056tqKREHOyKQDz1sEtk1n8F1GNPIL4BWyKNY%2BRp7Q%2FL1HJX9mZRuw6acMSIp96ewUp7k30LheEOMTxLFYwfolzlYAA2LxdN3k3rgMi0GOJvLN8qlL8RY3kdSxE8PwipCG4o3hNFKr%2BKCsS19hhuGAx05P6KZO5mL2XBcjFGghcA3E9SBOJs4DRwA60ECU6cUyFrI4Gs2%2BAa1n3jKNiAta1k834Xg5iecaKOBUJQlJmiYW5gwAUmjg2njYRXY3PFGW6K2n7IzStazceLK6a0kTSkmRzlgUKA1SfVRRQjUkB%2FLtrX2vTfyoh77W1O7xIlD%2BLvLn9z5iFW8IVXjz8h72HgLAxJ9h0G2MYvgvYiWYeCU6ZjPGF%2BKWYPwj6dzPputzOqKk6ez9LTDJeLCBxd0uNu8wqvnlSFrB%2FtE4zz%2BYGTg0x3ERT1mO6kgG9GMJBYuNQDiiCfWIA6Lnzxp%2FwQsSFB2z%2FqnAJMQn%2BUDVzX6leN1%2FiOVnpCM7%2BwiDkNxkNl%2FO%2Br3apn%2Buz3oN%2BcU0E7acRww1obcyQY6pgE60a%2B3vmlwsBaDLoE2eQOqWj0uaH1Y0DBOH%2Fpb33R9L%2FvaLscMdlAwFSEzO%2BqCFN3WLWiOukESNFu2sw2KjVTaeiJGhBBEDmdOygGnEKwRekZOVyKJWXR%2B%2BmpWCPxXa0i%2BIHPnfBnHYoFJiUmvo1f%2F%2FAYLfWj05A6q2oLtW0kReNyxiHR3v%2BSEQUPc%2BUbtp1Tm6fF82%2BVNhU6K%2BVtUlh9NWwhNHuh6&X-Amz-Signature=8003a3a50c143c41d64970bc50f5214501e57d716a83f1256295a738d5c487ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

