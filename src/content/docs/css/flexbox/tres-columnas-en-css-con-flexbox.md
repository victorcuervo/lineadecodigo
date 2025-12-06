---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2NWYNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaRSu7UUfnIBgHfq%2FLnXPF57UKoZQPPJGRjNJJjJ3TSAiBYesNHw4enOhHb9oXIR0vkJ0eSPh8rLsaYwkbs0vNBUir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4vPGjjMTF5zwPmmQKtwD89XqiM3RuQCiklgOmD%2FCj7FpxQbOICNfhK%2F1QuKbL%2FBJa8QdqD0RGzcyhLmNtNqC8DuMu4G1hLW9TiHVSGESvGO4QRdZqNlmfB7DSzXZCdpfBayeztufAhb%2FGLkgcCKQWDaMaYeGXoH7fTH%2BEfcjsdzcwKC7Q1Tu1L6TvGTD0kldgirbiVbRoATo%2F18mlEkv22tJHOU6hPpkOIq26aYVpLQHKSV49MyvSVuTRC5ACvTI6ShLpY88md5JvwMZRCC%2FA%2B94HwPXMOLeTnyCjIjCcGK3hIrcSmYvgJ0y4pizqnrWmDdrhNm%2BYAEoeRlRp4mijUDQHzaQluAr6wm4RYvRA57NA7jfPMAmlak7t1PsCqLEzZAy76FJT7F5%2BFUHDLNAnVEsizoEQNMnMH84TrnksPGry4bvlMAUthTLM4nZeZB%2FcoEmi5J7iy%2FUOrQ2c8456DPydY83JQl8q6aXSf3wx6UA4usBuhkrP%2FSulJSmtccPrGI%2BG3%2FrmqKpDy4YOd8o94ZNcLJEBVqzFGIfdPm%2FLSj6ckxoGfdq6adTg%2FyaIhHnJgxFHoKVtq10tUUnZ86wwqzXB2HpG1yJsxXcy7gP33tv%2BHRClBNAy12Ow9QPNMOyiiGhceawYNfqTsIwqsfRyQY6pgFVb%2FQsfLhGami6uRoQuyyTeCRq%2BV277dFyvjuN7jylsTi8IR90Vffb2nqH%2Bb9faE1FJK76S8E8HqShND1UA2pZAWvi54TJrTmrhdUw0Moid1NK%2FYu1G5nnHLVUITGaan%2Bs9GAK%2FnfhspyS49PvqELyF6%2Fp7rSp2M3cI0G%2BmbUQK75mLbnww5PUe1vu8bQ0aJInrFGSiET7l1FqTSyGRiwZISlyGN38&X-Amz-Signature=c8737149dbbb8c3d6e79004a0e8f79f02a805a568e6921e6fc6f971c70392324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2NWYNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaRSu7UUfnIBgHfq%2FLnXPF57UKoZQPPJGRjNJJjJ3TSAiBYesNHw4enOhHb9oXIR0vkJ0eSPh8rLsaYwkbs0vNBUir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4vPGjjMTF5zwPmmQKtwD89XqiM3RuQCiklgOmD%2FCj7FpxQbOICNfhK%2F1QuKbL%2FBJa8QdqD0RGzcyhLmNtNqC8DuMu4G1hLW9TiHVSGESvGO4QRdZqNlmfB7DSzXZCdpfBayeztufAhb%2FGLkgcCKQWDaMaYeGXoH7fTH%2BEfcjsdzcwKC7Q1Tu1L6TvGTD0kldgirbiVbRoATo%2F18mlEkv22tJHOU6hPpkOIq26aYVpLQHKSV49MyvSVuTRC5ACvTI6ShLpY88md5JvwMZRCC%2FA%2B94HwPXMOLeTnyCjIjCcGK3hIrcSmYvgJ0y4pizqnrWmDdrhNm%2BYAEoeRlRp4mijUDQHzaQluAr6wm4RYvRA57NA7jfPMAmlak7t1PsCqLEzZAy76FJT7F5%2BFUHDLNAnVEsizoEQNMnMH84TrnksPGry4bvlMAUthTLM4nZeZB%2FcoEmi5J7iy%2FUOrQ2c8456DPydY83JQl8q6aXSf3wx6UA4usBuhkrP%2FSulJSmtccPrGI%2BG3%2FrmqKpDy4YOd8o94ZNcLJEBVqzFGIfdPm%2FLSj6ckxoGfdq6adTg%2FyaIhHnJgxFHoKVtq10tUUnZ86wwqzXB2HpG1yJsxXcy7gP33tv%2BHRClBNAy12Ow9QPNMOyiiGhceawYNfqTsIwqsfRyQY6pgFVb%2FQsfLhGami6uRoQuyyTeCRq%2BV277dFyvjuN7jylsTi8IR90Vffb2nqH%2Bb9faE1FJK76S8E8HqShND1UA2pZAWvi54TJrTmrhdUw0Moid1NK%2FYu1G5nnHLVUITGaan%2Bs9GAK%2FnfhspyS49PvqELyF6%2Fp7rSp2M3cI0G%2BmbUQK75mLbnww5PUe1vu8bQ0aJInrFGSiET7l1FqTSyGRiwZISlyGN38&X-Amz-Signature=7bc7177b3e0534b3249b8b99e8ecef8ec4dfc2ecb64a3bc7e63c12cf1898f623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

