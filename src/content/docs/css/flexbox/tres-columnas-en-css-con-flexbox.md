---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLD2NNU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FEM5SCnsdL53ZfTmoCQ440UOl%2FH%2B3uRksKw2b6BJ0JAiBhQX3u2BvZzathoLGRyNAFHk8RwUODKZ0%2Bis0qHiBYrCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BfyyIITAYyqblPi4KtwDhnQifpES%2BQdAAG6vIevrCKVwFYlRXWJTi24JIHenbV1s%2F%2BI0HiBJaMGPGpiMJ%2FFuzU%2Bwsnq6zheP5qQigbreRXpvzwf7zqteuYfU%2BwNFQL4%2BeFv3ZkjI56BunQacPZ9lyaWklFMG3mWgeLsEQt%2F29Er09Rs6xWJdMOGqqWquwVj8%2FQpqmz%2FoagTEV7G0RR8vQeOPQKO%2BfyyF0YmCFbvdhyagmnlCSXz43JKOJa2mVEXxVA7vcHaaPYaDGITUTca%2B%2BS9KuhbephBlwJakFnX6bGQUwEHmUIjUosNgEEvBO6LTqPGTSUS8o2dqvAfGsID4wUIF4E8prkUxbJW2ftmKravja6HnP%2FuiiYmLcsg1X1zI8tf25wd719S9KkZWCWgTYZAsBrerOKxdnuPBTH4HmLUYxi7TTps0b1beKrKCZyRaSzj%2BrvzL%2FDCi3vC8iAJ8CqMD2MVS0senIB4qnDXzvQcUuWXNWqiTFYAc8Rw7gXru0YjHMZGVsXXnihh4EQlCyx9XzJH8WLbNTW3zQ%2FZmVTl%2BlITlkuLd2j8Rq1TAB5%2FTI17aMdCJoMlwZwOaQ3C7ob089rtTtsMQAx8rup2%2FfsZMpV923hXcO4ic7Yb8KtEkKdmWTTy%2FVFhp7SkwoO3ZyQY6pgEQfp2iiZowgfVlm6UDD1yzVrvMW9HTs3q6oXKxKH7Z86AyObv6wtAtO%2BeEx6sBomXSE8NjlYpEg4JzvWRprgGDyI6KFTjTgz1MQxk1KEXjMwlZ8NRkKGPEmWTv7QyuaLbpaBkmhxPHfB3iDyaUpS7NMMFtbdX0hqaSdkmr0C7a4LzbxM3Qvgr5qW2GIxuW09aPBmj4UjoGY%2FwNeKXhCw%2F5iVCrdbSp&X-Amz-Signature=6be87dc902a607db6f8b0e27f9bc80cd4f5b0e4db20c4ed11172c75e75dc450f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLD2NNU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FEM5SCnsdL53ZfTmoCQ440UOl%2FH%2B3uRksKw2b6BJ0JAiBhQX3u2BvZzathoLGRyNAFHk8RwUODKZ0%2Bis0qHiBYrCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BfyyIITAYyqblPi4KtwDhnQifpES%2BQdAAG6vIevrCKVwFYlRXWJTi24JIHenbV1s%2F%2BI0HiBJaMGPGpiMJ%2FFuzU%2Bwsnq6zheP5qQigbreRXpvzwf7zqteuYfU%2BwNFQL4%2BeFv3ZkjI56BunQacPZ9lyaWklFMG3mWgeLsEQt%2F29Er09Rs6xWJdMOGqqWquwVj8%2FQpqmz%2FoagTEV7G0RR8vQeOPQKO%2BfyyF0YmCFbvdhyagmnlCSXz43JKOJa2mVEXxVA7vcHaaPYaDGITUTca%2B%2BS9KuhbephBlwJakFnX6bGQUwEHmUIjUosNgEEvBO6LTqPGTSUS8o2dqvAfGsID4wUIF4E8prkUxbJW2ftmKravja6HnP%2FuiiYmLcsg1X1zI8tf25wd719S9KkZWCWgTYZAsBrerOKxdnuPBTH4HmLUYxi7TTps0b1beKrKCZyRaSzj%2BrvzL%2FDCi3vC8iAJ8CqMD2MVS0senIB4qnDXzvQcUuWXNWqiTFYAc8Rw7gXru0YjHMZGVsXXnihh4EQlCyx9XzJH8WLbNTW3zQ%2FZmVTl%2BlITlkuLd2j8Rq1TAB5%2FTI17aMdCJoMlwZwOaQ3C7ob089rtTtsMQAx8rup2%2FfsZMpV923hXcO4ic7Yb8KtEkKdmWTTy%2FVFhp7SkwoO3ZyQY6pgEQfp2iiZowgfVlm6UDD1yzVrvMW9HTs3q6oXKxKH7Z86AyObv6wtAtO%2BeEx6sBomXSE8NjlYpEg4JzvWRprgGDyI6KFTjTgz1MQxk1KEXjMwlZ8NRkKGPEmWTv7QyuaLbpaBkmhxPHfB3iDyaUpS7NMMFtbdX0hqaSdkmr0C7a4LzbxM3Qvgr5qW2GIxuW09aPBmj4UjoGY%2FwNeKXhCw%2F5iVCrdbSp&X-Amz-Signature=284e6a98040829578986573d09d6b23b04704a280ac402d158a85bd0d44d9de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

