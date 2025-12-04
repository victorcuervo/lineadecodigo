---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWI7G23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCUi6nS53%2Fvdz3O8cs67PgLHDXu1V33RJQ5NUzDEMRKzwIhAJ9qrBQd3h8TXErzPzYd1IhlTWZsxc3KidWtFmjncISVKv8DCDoQABoMNjM3NDIzMTgzODA1IgwiafQKbs1tl2cvlHMq3AP07wGceTokSmrTelibktve4%2FkAf8KBEORtHZDVWDe0RQuz2EYS9xcAgV1FtbcvF%2FCGh7t8MdD1lZMcTd34fJfyGnaDqlC0iUKtI6MTpJJ3t%2BCD5Ug1hvlvLo6dSoNLBtGnZjLLYi%2FluQwvFDYAtoq%2FvX6SHuS2rfQd5dv9Wlu0J%2BgYC9XIxKe73t1Dj45%2FXAcChPLgnwFR5kja2BewuHqzXEAi5cgCcp46FTgN0pAMdAkPAjMk7KonZtmXOLYwZOAJ84Pmy1t9VUG6%2Fp4mjzalC3ckSAd0UeUuqVKw0MGAGDl1D1KgII0nxyWJwxogyGbOFOYbA4p845aBUVtYAuz0B%2BizwuejvOlsHU4kQv0Mjq6w9%2BosFTvPlN%2BqvSrHWNQE3hvf6%2BhlHJGEOu8zd9hiJ7djYcnRtpDLz9KuCkWBUn9R%2FYy7AuHvMJNFOxJ4c8q%2B1OS93fl%2BduKM9GheUpsyrOY4s%2B%2FZqCK5kIUPMPkCut5%2Bftp%2F5XHG7f%2F2ukm3Kf0O40DsHeywRTUIA3WWt1yXhZb9ctX%2BFmW8tc6%2BnNnQk3qokXmg%2BWDwsI2WjAHNse8ADJ454Xa4xiD%2Fxup35AR6hbSdtnWp17jyCp2Cf6sFjGa8mf2lnc%2FuleP5jDD0tMPJBjqkAd8L2LJyPed6gzexH7BF89GdzbO6UMChbMkmWfuEs2D7geIJ1gTSYKPyobX02y8Q07CWkCJ8iiTRXGblLFp8WghDgNtQIJBg8uQ27R9mFpdH7wbPo9mAAThBShI5Avx2IL0pU%2BFVXY0acFcEy4XzAM6cAZKze3svTyc3bZe314Qf%2B3C1QvZHS6nDi2AllpFXtlME0C6vnh4krRphrJMurEkQ4Blo&X-Amz-Signature=bdf6014a460610646a9c488be986bbc9493dfd8e3fcc2ef503b5e2a0b17998e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWI7G23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCUi6nS53%2Fvdz3O8cs67PgLHDXu1V33RJQ5NUzDEMRKzwIhAJ9qrBQd3h8TXErzPzYd1IhlTWZsxc3KidWtFmjncISVKv8DCDoQABoMNjM3NDIzMTgzODA1IgwiafQKbs1tl2cvlHMq3AP07wGceTokSmrTelibktve4%2FkAf8KBEORtHZDVWDe0RQuz2EYS9xcAgV1FtbcvF%2FCGh7t8MdD1lZMcTd34fJfyGnaDqlC0iUKtI6MTpJJ3t%2BCD5Ug1hvlvLo6dSoNLBtGnZjLLYi%2FluQwvFDYAtoq%2FvX6SHuS2rfQd5dv9Wlu0J%2BgYC9XIxKe73t1Dj45%2FXAcChPLgnwFR5kja2BewuHqzXEAi5cgCcp46FTgN0pAMdAkPAjMk7KonZtmXOLYwZOAJ84Pmy1t9VUG6%2Fp4mjzalC3ckSAd0UeUuqVKw0MGAGDl1D1KgII0nxyWJwxogyGbOFOYbA4p845aBUVtYAuz0B%2BizwuejvOlsHU4kQv0Mjq6w9%2BosFTvPlN%2BqvSrHWNQE3hvf6%2BhlHJGEOu8zd9hiJ7djYcnRtpDLz9KuCkWBUn9R%2FYy7AuHvMJNFOxJ4c8q%2B1OS93fl%2BduKM9GheUpsyrOY4s%2B%2FZqCK5kIUPMPkCut5%2Bftp%2F5XHG7f%2F2ukm3Kf0O40DsHeywRTUIA3WWt1yXhZb9ctX%2BFmW8tc6%2BnNnQk3qokXmg%2BWDwsI2WjAHNse8ADJ454Xa4xiD%2Fxup35AR6hbSdtnWp17jyCp2Cf6sFjGa8mf2lnc%2FuleP5jDD0tMPJBjqkAd8L2LJyPed6gzexH7BF89GdzbO6UMChbMkmWfuEs2D7geIJ1gTSYKPyobX02y8Q07CWkCJ8iiTRXGblLFp8WghDgNtQIJBg8uQ27R9mFpdH7wbPo9mAAThBShI5Avx2IL0pU%2BFVXY0acFcEy4XzAM6cAZKze3svTyc3bZe314Qf%2B3C1QvZHS6nDi2AllpFXtlME0C6vnh4krRphrJMurEkQ4Blo&X-Amz-Signature=e6843b108d1faef1f698fb836c047c08dc4f2f1b4b6202fcb7d7cfa94f085c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

