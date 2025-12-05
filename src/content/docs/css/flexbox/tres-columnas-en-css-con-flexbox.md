---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUADMZW2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbV0ZU9jNXGcerfmylfd%2FVFvRE11QGjbOV61pglgha5AIhAPW1Qzmf%2F8L8EX6Sw5SOytKhQ2i74bN5GtYABKZTEGtWKv8DCGYQABoMNjM3NDIzMTgzODA1IgxcNBsF4IFTqHcc3NQq3AOf%2BbJKuv926MlsJD2TlNjD5mD8P2r8iySeLyaiAiZfdcFlHVLZTbA3pirU%2Bc%2F%2BZ7c%2B1pXBOemBk19Ja8OxFLC6S2nhh4mVAGWT40s33M2RFSIjrZ%2FC%2BvOZM0yVdIOSSVHxy16ysCakdOn1mmoZMzIADNXQM1WyXgHx9lxHRwUSiW94SCsYPohjGH55qmcEjIu%2FSXiFanAps%2FWZzWWC7Wv19S8zLzH%2B8gTyx%2F2WIHqUuxGoLU8XXos9f53XKEJvV10yAOMZKARIpCEsEh9WsrnlfdTAHUN%2BOVaYKjPbeViWvEQslnEyFOtN2THuLZ0%2FWmzcpJjnNJgYToTE1TlY%2B1QlEYgs%2FG5EvfJVCfLolc9%2FLqLieikJd0R25WM58JpAIt1%2BD697GxRYB2v4h1Qd0u%2BIum53MGH1cb1UHqQHFVG7CxVHLtYdwPPEvM3Hc8nB8zvyQp%2FfKaKROZxXBgTgVu9zaSgFNuvlymJtUewVEPOERWS9NhhXPH1c1%2BaBDEgJjy64yrso6Zndtl9r4Xl0CjaRiOyzZS%2FevMCerxuuuymkzkYCa3l3RZJfF9Bk%2FrFRdolwtowejsC5rG%2FClvdRzjk2wpcRJt3mheshr7H0hUdhyqEYkMf%2FNQkfAFFLPzCBls3JBjqkAW4vgbbL0sGu8VM84BeCZHvn9BUnAV77QWrxzcvTT7SJnXRqwgieZjUcxU2iF0%2BFkVz%2B0VDIaYlKs41FdHZMRekIN4rq0aKTui23gIfAb3%2B7fO6MypHWsTcW4mghcYkwNZybPyw4US5Dwkn71hRMkyt%2B4UeYj8UqoyN5oHHJhH7C1OxOUvWx55Sw8N%2F0Iu4or%2BpGJHNkct0Carllf1NklWqem3qu&X-Amz-Signature=fedb3249293884ccd887be6ef6458024baa4699cbbc2aba26a8e9cd2c7704e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUADMZW2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbV0ZU9jNXGcerfmylfd%2FVFvRE11QGjbOV61pglgha5AIhAPW1Qzmf%2F8L8EX6Sw5SOytKhQ2i74bN5GtYABKZTEGtWKv8DCGYQABoMNjM3NDIzMTgzODA1IgxcNBsF4IFTqHcc3NQq3AOf%2BbJKuv926MlsJD2TlNjD5mD8P2r8iySeLyaiAiZfdcFlHVLZTbA3pirU%2Bc%2F%2BZ7c%2B1pXBOemBk19Ja8OxFLC6S2nhh4mVAGWT40s33M2RFSIjrZ%2FC%2BvOZM0yVdIOSSVHxy16ysCakdOn1mmoZMzIADNXQM1WyXgHx9lxHRwUSiW94SCsYPohjGH55qmcEjIu%2FSXiFanAps%2FWZzWWC7Wv19S8zLzH%2B8gTyx%2F2WIHqUuxGoLU8XXos9f53XKEJvV10yAOMZKARIpCEsEh9WsrnlfdTAHUN%2BOVaYKjPbeViWvEQslnEyFOtN2THuLZ0%2FWmzcpJjnNJgYToTE1TlY%2B1QlEYgs%2FG5EvfJVCfLolc9%2FLqLieikJd0R25WM58JpAIt1%2BD697GxRYB2v4h1Qd0u%2BIum53MGH1cb1UHqQHFVG7CxVHLtYdwPPEvM3Hc8nB8zvyQp%2FfKaKROZxXBgTgVu9zaSgFNuvlymJtUewVEPOERWS9NhhXPH1c1%2BaBDEgJjy64yrso6Zndtl9r4Xl0CjaRiOyzZS%2FevMCerxuuuymkzkYCa3l3RZJfF9Bk%2FrFRdolwtowejsC5rG%2FClvdRzjk2wpcRJt3mheshr7H0hUdhyqEYkMf%2FNQkfAFFLPzCBls3JBjqkAW4vgbbL0sGu8VM84BeCZHvn9BUnAV77QWrxzcvTT7SJnXRqwgieZjUcxU2iF0%2BFkVz%2B0VDIaYlKs41FdHZMRekIN4rq0aKTui23gIfAb3%2B7fO6MypHWsTcW4mghcYkwNZybPyw4US5Dwkn71hRMkyt%2B4UeYj8UqoyN5oHHJhH7C1OxOUvWx55Sw8N%2F0Iu4or%2BpGJHNkct0Carllf1NklWqem3qu&X-Amz-Signature=cc181d6164268b808ab668cdb113aa3db28e5838d6d62b484b212039fa7f67d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

