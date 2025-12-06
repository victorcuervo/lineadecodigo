---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGWY7PK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpJ%2BMiKy6flfS7HcayDcPnpCbl3GcWSljZ3zjiRrm1FAiAFSSUmRPhDkBldRgKNvm6Kehij9omL1oFm3scL9N6epir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMCLQ0uYnEex86zKKsKtwDp1CCMITUfqSGZw0ogOPvsnvR%2B7xpOcGevbiQ1%2BouCCNhyW9f6K7IHmlRpj%2BHlUQQfKG%2BTVJxybX%2BLwH%2B%2B1fpNtwLtWayEDgzaEcd1XcC0OUeq3Rag7LtMWNc75xvKpjFWSMdQXZrE9EvbTKIV9%2FgPGomCK1tC6ZEbD%2BU%2BoH97Wa2Ceq42gGgNjFJGf14kHThXTi5fP%2F5QeGustXhLQXbv8zRb%2FJmAVSTjcBTKTPUzY3IYdlZjwbehFsAuH%2Bo0e%2BEBSz7jzfrNM8GJnbd79RHL42tX%2BzYZtqQhrj0CZdD6QV6MqDEqsFLo797SWUdhxfvHor2rwdCh%2BUHVeTamMEHNa3JRoXrx8CsWzxeXlUw1yVccqfjvXH6YcONigVRR8RDvgRoO3oynSJtRRVyEuiY%2FFGjUqXsGFcTqPTCBM2TANYMwhAlcwLKSFfHY%2F5N%2BY9FOPeMC7DoimXOhAKFA%2Bs67uAuIxlfT8aCkaPNm%2FGGavluUlKxQoc6I6e9JY67vnDgwGQwo8ywtzhjgNRDM8AiF5MIYeD0FaFVZAbISwk4NsKBo%2Bz6GgHTpBIbcadMPt4Zh1KtjoE4mkJrnKxfcRbIX5YZXS5iT5P%2BTEe7ZF6HSGev6XJ3DWBZ59kMNTYw3KfOyQY6pgHabx1paO9Bp%2FnMlYunHb3REtiildrfLueDbJgMtURYeqSTwe0jhSM%2FvwWohIvgRKW0PlYsr0z21j%2FCg3zoEf%2FDdy3Ik%2FpJyASJo8ox8pUhXB%2BR6zbQGCTtcUV1V3PpOZJVU0lF2gzecZtt%2Bt0fY%2FZi4qMY0QxRsPJKwfSfSIuEI7PDRCGCi2n3g86SU8MtO%2Fd2itBUcTJoa8v0JIQsCRZo1hoh8Qpy&X-Amz-Signature=a94f83e594f152429b346bbeef23360bf302b7715c526fc30eb048cd74690516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGWY7PK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpJ%2BMiKy6flfS7HcayDcPnpCbl3GcWSljZ3zjiRrm1FAiAFSSUmRPhDkBldRgKNvm6Kehij9omL1oFm3scL9N6epir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMCLQ0uYnEex86zKKsKtwDp1CCMITUfqSGZw0ogOPvsnvR%2B7xpOcGevbiQ1%2BouCCNhyW9f6K7IHmlRpj%2BHlUQQfKG%2BTVJxybX%2BLwH%2B%2B1fpNtwLtWayEDgzaEcd1XcC0OUeq3Rag7LtMWNc75xvKpjFWSMdQXZrE9EvbTKIV9%2FgPGomCK1tC6ZEbD%2BU%2BoH97Wa2Ceq42gGgNjFJGf14kHThXTi5fP%2F5QeGustXhLQXbv8zRb%2FJmAVSTjcBTKTPUzY3IYdlZjwbehFsAuH%2Bo0e%2BEBSz7jzfrNM8GJnbd79RHL42tX%2BzYZtqQhrj0CZdD6QV6MqDEqsFLo797SWUdhxfvHor2rwdCh%2BUHVeTamMEHNa3JRoXrx8CsWzxeXlUw1yVccqfjvXH6YcONigVRR8RDvgRoO3oynSJtRRVyEuiY%2FFGjUqXsGFcTqPTCBM2TANYMwhAlcwLKSFfHY%2F5N%2BY9FOPeMC7DoimXOhAKFA%2Bs67uAuIxlfT8aCkaPNm%2FGGavluUlKxQoc6I6e9JY67vnDgwGQwo8ywtzhjgNRDM8AiF5MIYeD0FaFVZAbISwk4NsKBo%2Bz6GgHTpBIbcadMPt4Zh1KtjoE4mkJrnKxfcRbIX5YZXS5iT5P%2BTEe7ZF6HSGev6XJ3DWBZ59kMNTYw3KfOyQY6pgHabx1paO9Bp%2FnMlYunHb3REtiildrfLueDbJgMtURYeqSTwe0jhSM%2FvwWohIvgRKW0PlYsr0z21j%2FCg3zoEf%2FDdy3Ik%2FpJyASJo8ox8pUhXB%2BR6zbQGCTtcUV1V3PpOZJVU0lF2gzecZtt%2Bt0fY%2FZi4qMY0QxRsPJKwfSfSIuEI7PDRCGCi2n3g86SU8MtO%2Fd2itBUcTJoa8v0JIQsCRZo1hoh8Qpy&X-Amz-Signature=869577dc429f827626d6962182869bfdf1f7d8f934ad74e825c3c7bed3a99dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

