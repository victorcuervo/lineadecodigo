---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STYZIYV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNTjbLUu1CIxuMzSKPtk%2B%2BINVK4s8D%2FpyNsQDgPrQdyQIhAIP4rtWNmAJGxDu6VK7lp6OxnGRyJNYXSaP8sTTIV0ElKv8DCH8QABoMNjM3NDIzMTgzODA1IgzkL7Lo677e6OjXB70q3AP4cTAsajL0VdN%2BoFd5pY%2B2%2Brrzv1aeVXz%2BxlXFtrsfizewAEeKSp8Gr7E%2FVJNqT9CUlBdS79UhNEIwD3JfxAwZ9F0zpH3VnXW3tur8%2FrA6RXMKBjQgDZxIH8NupAZl48FgUrVIcMF%2BAvIIEuU75%2FRdQsen%2FcGrlSKHAyQ27xKlxB7Tp7ENLUH%2FnZmOuZSnMh2g%2F9u12nL1YV5v38jA9kZgIDfYM4Wo9vMZalCsTJtOfTFK%2BKw5bG8e5qNP2AlzLj70e%2FpG7NBqoVdx44phf9UR8Ag0zt2JwdwAvdDeZAdN1DC4d%2FDEPpsLW5CBBxUcrtCx09ori285XI8s13PtlKWh0w%2BodTFWJdestTr2qdnepg%2BPYDDR%2BKY2xLYZTAC41zdC04G0zt1SJARkpnl2SVk%2FtZH426XfP%2FXvP%2BJlQkcf3yTeJ19aKsfDePGvqWra0DWmhYeIG0cHp%2BOAJjklYvJu62%2BCH3FSIL4iMiY8MkhbEtoKRIAbthe5q2byumni1CrqBlB6YhfECw9gexvJhDeFzvq9cugNbA9LHvJMNDW8XeP6qS%2BwxCpFKn%2FzIeaPJsXN0K70W5cVnpp%2FDSesVotX0QArCaIJcT4ycW7TI0Ds4A6kXbgVoIH2SB8CgzCE09LJBjqkASfyleT%2F63rERAyc4SxjTImvXfMgeOv0yOmN281%2FZLONlJfSaIFl%2Fynzb1Zi3PXad2YhsKW2AFcx7ZNSvw1YWFDiyDo0uemKwdei3aIaLAnkKq0lvZDWQRaLvP84zYm%2FkOoVU7oqYOu4N%2BfoaFFTPvjqQNpNyPYDBCnYXh2pacpcXgjH7FzgfUKTHJS5jayu1ntHbDXkCXsfw%2F0pL5bmEdsKRuie&X-Amz-Signature=f25cab2780d5eb6d6f85e045109bd7cadfb63f12571ed18be3fb80f20beed2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STYZIYV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNTjbLUu1CIxuMzSKPtk%2B%2BINVK4s8D%2FpyNsQDgPrQdyQIhAIP4rtWNmAJGxDu6VK7lp6OxnGRyJNYXSaP8sTTIV0ElKv8DCH8QABoMNjM3NDIzMTgzODA1IgzkL7Lo677e6OjXB70q3AP4cTAsajL0VdN%2BoFd5pY%2B2%2Brrzv1aeVXz%2BxlXFtrsfizewAEeKSp8Gr7E%2FVJNqT9CUlBdS79UhNEIwD3JfxAwZ9F0zpH3VnXW3tur8%2FrA6RXMKBjQgDZxIH8NupAZl48FgUrVIcMF%2BAvIIEuU75%2FRdQsen%2FcGrlSKHAyQ27xKlxB7Tp7ENLUH%2FnZmOuZSnMh2g%2F9u12nL1YV5v38jA9kZgIDfYM4Wo9vMZalCsTJtOfTFK%2BKw5bG8e5qNP2AlzLj70e%2FpG7NBqoVdx44phf9UR8Ag0zt2JwdwAvdDeZAdN1DC4d%2FDEPpsLW5CBBxUcrtCx09ori285XI8s13PtlKWh0w%2BodTFWJdestTr2qdnepg%2BPYDDR%2BKY2xLYZTAC41zdC04G0zt1SJARkpnl2SVk%2FtZH426XfP%2FXvP%2BJlQkcf3yTeJ19aKsfDePGvqWra0DWmhYeIG0cHp%2BOAJjklYvJu62%2BCH3FSIL4iMiY8MkhbEtoKRIAbthe5q2byumni1CrqBlB6YhfECw9gexvJhDeFzvq9cugNbA9LHvJMNDW8XeP6qS%2BwxCpFKn%2FzIeaPJsXN0K70W5cVnpp%2FDSesVotX0QArCaIJcT4ycW7TI0Ds4A6kXbgVoIH2SB8CgzCE09LJBjqkASfyleT%2F63rERAyc4SxjTImvXfMgeOv0yOmN281%2FZLONlJfSaIFl%2Fynzb1Zi3PXad2YhsKW2AFcx7ZNSvw1YWFDiyDo0uemKwdei3aIaLAnkKq0lvZDWQRaLvP84zYm%2FkOoVU7oqYOu4N%2BfoaFFTPvjqQNpNyPYDBCnYXh2pacpcXgjH7FzgfUKTHJS5jayu1ntHbDXkCXsfw%2F0pL5bmEdsKRuie&X-Amz-Signature=56fd01fb6ca19ff5e987ebac8f5d66658005db4120b8043f8b5e7b938e658097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

