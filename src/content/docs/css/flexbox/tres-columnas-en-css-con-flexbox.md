---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOM5IFOL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCioDgyYSKarD5OZaZnQrIGMREy9CMCbX2hqZLapPkwOAIhAMnU6f%2FhKSLd0wgZFESbwnslYKYxS4Q9oTEt%2F7JPuzzTKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpDig5aIzh094wr4kq3AMUtNq63PvHSmXDY1M4ifGHytCrVdURq3IH25ylwcMGjVHg%2BCRnR2xDlWBsoqbhGdQ%2BmDOVD6RyO3jlFnLmo8MCVj4QPOzXBk9cw2neHx%2FdWQbEhCtb55dCGIdub3pKpfTzbqO%2BIY7h%2F4qdBQ411J2DDlzbuvON8cxkVvNc04aimSH%2BbkEbtpEwve2TNJpWONJWMnGFXEmAM2Jh234zRvJcHBEAGhTwJ2I%2FXNekt90c%2BZTVjGSbLf2UpL00w14bZO7xeODYtUNkKje6aiRaXhMM5IcaHwtrLxI8SIKDvZZ%2FpLKX9Y6cuSGa67STlqkoZnST5nocJexz6HpBcsDVNjt1eNMu%2Bkawi7%2Ft7LdL%2FXo26ndodiycYtbWanxjqRnZz2SSrc33QrD%2FDTQzmuJT%2F3yWvOgx68mscY8V%2BD1PD%2B73cUSivn0%2BN%2FgUGBr6D9rfq6yxtrRPGQifF%2F1HRs%2BxNfn%2BNDwA78zD76LhzeHpy%2F08ZvjlMayDAyN0x4dSK4uKJUnqzKHJ1JqKrVlIBVnI%2FqntGIb%2BQtm69Pu%2FdCSHu9VihhZeh%2BIubrvGYdNxeIiIfYkyKrrf7aUxb0qRrA9ZT1zb5wGqA3ds9PLFuNDID7MbiYIMj66biNO2dGOzBTCmmtTJBjqkAXnaYaAragijq9sasgKjOMW2XHFlwx5KjZ4ukoEhmtjGNX0WzNsOArg5A8eU2r%2FZV4HtWmZic6ZVpYa1SddqdZL2kRc%2B8iVaqUo7R9j3hZco2PoUdzkFdiI8gJlDUi4jOkYTiuiJ%2B4Fn6c8gg%2BwEE5%2BlOW4Fe3BVGL%2BEw1SFnIz8tODpbEh4J3QsRjamk6WXKQSXV1tfVna%2BnqV4Du%2FVbPbh%2Fdi7&X-Amz-Signature=f522f543e8f5f0a0df3f48048ee6b4d2a6521f747816164334d743db8bff1e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOM5IFOL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCioDgyYSKarD5OZaZnQrIGMREy9CMCbX2hqZLapPkwOAIhAMnU6f%2FhKSLd0wgZFESbwnslYKYxS4Q9oTEt%2F7JPuzzTKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpDig5aIzh094wr4kq3AMUtNq63PvHSmXDY1M4ifGHytCrVdURq3IH25ylwcMGjVHg%2BCRnR2xDlWBsoqbhGdQ%2BmDOVD6RyO3jlFnLmo8MCVj4QPOzXBk9cw2neHx%2FdWQbEhCtb55dCGIdub3pKpfTzbqO%2BIY7h%2F4qdBQ411J2DDlzbuvON8cxkVvNc04aimSH%2BbkEbtpEwve2TNJpWONJWMnGFXEmAM2Jh234zRvJcHBEAGhTwJ2I%2FXNekt90c%2BZTVjGSbLf2UpL00w14bZO7xeODYtUNkKje6aiRaXhMM5IcaHwtrLxI8SIKDvZZ%2FpLKX9Y6cuSGa67STlqkoZnST5nocJexz6HpBcsDVNjt1eNMu%2Bkawi7%2Ft7LdL%2FXo26ndodiycYtbWanxjqRnZz2SSrc33QrD%2FDTQzmuJT%2F3yWvOgx68mscY8V%2BD1PD%2B73cUSivn0%2BN%2FgUGBr6D9rfq6yxtrRPGQifF%2F1HRs%2BxNfn%2BNDwA78zD76LhzeHpy%2F08ZvjlMayDAyN0x4dSK4uKJUnqzKHJ1JqKrVlIBVnI%2FqntGIb%2BQtm69Pu%2FdCSHu9VihhZeh%2BIubrvGYdNxeIiIfYkyKrrf7aUxb0qRrA9ZT1zb5wGqA3ds9PLFuNDID7MbiYIMj66biNO2dGOzBTCmmtTJBjqkAXnaYaAragijq9sasgKjOMW2XHFlwx5KjZ4ukoEhmtjGNX0WzNsOArg5A8eU2r%2FZV4HtWmZic6ZVpYa1SddqdZL2kRc%2B8iVaqUo7R9j3hZco2PoUdzkFdiI8gJlDUi4jOkYTiuiJ%2B4Fn6c8gg%2BwEE5%2BlOW4Fe3BVGL%2BEw1SFnIz8tODpbEh4J3QsRjamk6WXKQSXV1tfVna%2BnqV4Du%2FVbPbh%2Fdi7&X-Amz-Signature=a90579cf1dbfb3c4829062e96e24a7831304a25dc3a65a766d6724e19c493044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

