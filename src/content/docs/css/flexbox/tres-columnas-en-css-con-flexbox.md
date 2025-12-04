---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5SM5U6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu%2FkeW0TBq1mvLqaLacWfr5j657cZbiVz1wlZWmNdZGwIgQEISWaFCxffqrhM5ZSA94a80n4gZ5fc7SeKjPz%2FyXQAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHCHTvHK3SoPi1keOyrcAzzan5eJGILWMpYqpmzNPBBcWUAx2eZZAkxbuAKYiCQGr6daoTgC9VTiC7hbn7UHx9KLbsZ2wiNYAjcyLIU%2Bh9zNJyaT8qVtZOA92AqB17erifRe%2F2fz7rydg8X3iJErk5Uo2JKJAUcvmUkoKSBs7OLqhny3ePmMwdZfDHn%2Fje78N3wtHb%2FO4BljsfaovSSV9yuqR4F50ckcq0srJIknmM0zq%2BHnT3KdMJyxZ%2FSRr4AlbEzwoBtNMM6sxShOXH8IUOMuBMNSptkSv0obvABfiA0pJ%2FVydWrhZ7DU2IDJowgUr0lSsbFPbOTCUkxa%2FwKJ9vd3RZWcveWaOeANQSCnFgV7j1ZQZOJKETXgJAkzIdGnLCX5Mol%2BA4s76Lui8VQJ1iBVN7grKsgFPCn%2BAGVADU4CSJ4O3RnAtKhBJ8jN2n32YcpFxoswUw5oqRSuThsqIhk0g%2Ba6udjEGBs6nATMUXXZr1lMkFNOLWFltmep%2Fdw%2FH0qIPH1nlvtm3Id66crh6sypSXh65S5LODd04B66dWW9cwf4CXWKzPu%2FRUdstPvmBFljzzc8hwC5hgqaGqdEBE9l4S2Vn%2BUp7JjhXeGTzSkNQ2o6xmV4zDoPHt1qgvc%2B0iC5cvgzI4OfCkQ1MIPdxskGOqUB%2B%2FGU0%2Bkrxv5VEK31veveK9yzKBYFtBFzC7cEbpW3FLp56pqzIrvdQvaoCioxQf8bVghejp9C5wWaRrRdd9sqVewn70bvlYMEMG63PPJnk%2BDCuijGpzi%2FZlubAMwuJGoyxYCL7U2SnWErr0BRVr8L3NBoYDjQXhzOEsn8sF5SZ7CAa8%2BkDsvUYWYYXCQglb09mHH2uOKRySaPkLkuk2olpo0o%2FRJg&X-Amz-Signature=82042f7eae45477df2346ff18e73bed04d6d739e6242dba5f6f040c0580bc8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5SM5U6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu%2FkeW0TBq1mvLqaLacWfr5j657cZbiVz1wlZWmNdZGwIgQEISWaFCxffqrhM5ZSA94a80n4gZ5fc7SeKjPz%2FyXQAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHCHTvHK3SoPi1keOyrcAzzan5eJGILWMpYqpmzNPBBcWUAx2eZZAkxbuAKYiCQGr6daoTgC9VTiC7hbn7UHx9KLbsZ2wiNYAjcyLIU%2Bh9zNJyaT8qVtZOA92AqB17erifRe%2F2fz7rydg8X3iJErk5Uo2JKJAUcvmUkoKSBs7OLqhny3ePmMwdZfDHn%2Fje78N3wtHb%2FO4BljsfaovSSV9yuqR4F50ckcq0srJIknmM0zq%2BHnT3KdMJyxZ%2FSRr4AlbEzwoBtNMM6sxShOXH8IUOMuBMNSptkSv0obvABfiA0pJ%2FVydWrhZ7DU2IDJowgUr0lSsbFPbOTCUkxa%2FwKJ9vd3RZWcveWaOeANQSCnFgV7j1ZQZOJKETXgJAkzIdGnLCX5Mol%2BA4s76Lui8VQJ1iBVN7grKsgFPCn%2BAGVADU4CSJ4O3RnAtKhBJ8jN2n32YcpFxoswUw5oqRSuThsqIhk0g%2Ba6udjEGBs6nATMUXXZr1lMkFNOLWFltmep%2Fdw%2FH0qIPH1nlvtm3Id66crh6sypSXh65S5LODd04B66dWW9cwf4CXWKzPu%2FRUdstPvmBFljzzc8hwC5hgqaGqdEBE9l4S2Vn%2BUp7JjhXeGTzSkNQ2o6xmV4zDoPHt1qgvc%2B0iC5cvgzI4OfCkQ1MIPdxskGOqUB%2B%2FGU0%2Bkrxv5VEK31veveK9yzKBYFtBFzC7cEbpW3FLp56pqzIrvdQvaoCioxQf8bVghejp9C5wWaRrRdd9sqVewn70bvlYMEMG63PPJnk%2BDCuijGpzi%2FZlubAMwuJGoyxYCL7U2SnWErr0BRVr8L3NBoYDjQXhzOEsn8sF5SZ7CAa8%2BkDsvUYWYYXCQglb09mHH2uOKRySaPkLkuk2olpo0o%2FRJg&X-Amz-Signature=aaa04dde17ef5ebdc286dd4ee25b4876f377cc8b5e4bca64758331f01fd26fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

