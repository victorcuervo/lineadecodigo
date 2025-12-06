---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2SW4LW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjIDeL2VPVY2raLIQBC7M2i%2Fi62hsvyMeXzRIgF2PEAiBBuM9te41QelLgECHbL5gT7XlxGNG97%2BFoYn8WnVyP2SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeA9QIEiaJqzlTtPqKtwDBLuSQNA2byCXwnnZatkC1EixrsZlkiA1rjs36qZ74PjLhU%2BbZhTWZ1GMnGAW0p9XkR11jmemgphnxyqca5tHKQirrwCMZ77J6qLK8vm9g10l2XnEpwjOMPToixkwUSjJ%2BngWFqLDOf%2B7%2BIB0I0MVEKRF3IeCj59McgGQxIgLFgXw6cyohTZOaCnSHJgueV8D1IdTl%2BPTdSW6cnFs5LHSZSe%2BiNoK9PvPZ9Ong%2FMV6YYxD5eoOscGsqIN%2FYorj4%2FOB%2BUTQEpT21b2E25dnBHz6Ym0Vv68p580EzIZraqBYDwGEIhWwdxsQRKv%2F70cAWcWJUspAkYajeQ%2BD8OfRgGWVaoCmecNcc77oCkc%2BqBwbnWNkO7WeoT55qAj45KCK2L2v%2FDz62eWMEToux7XDAYU%2BWD8xdV3s%2FKWzUTWV0leMGb1CmK3FTzeOPNwYmKn5CPi7lWcSuxDwNHyPiMFZFp7dIeGvnpgAsDukmZXXHRioevT7%2F2g%2B0tPhhDzuakWIkNxYvbi6PNIjc0rfTSNgx96LX1ttg388jmYHy2Egc7HUZM6T7XQDV%2B%2Br0xQx6zLd5CGSIhyxD7aQruHrl9FdmdajGdHiksyoIMdrNRnneY3A3iIAdZREyQqLLYCNocw8%2F3SyQY6pgEIgC4b3CfDfZeSwa1KKuWJg%2BkkGDo4QzAlkoiPPhehVkYtkI%2FZMYsq20Acuk53pZaC0oJ88YAQuqRsQqiggTftWAAhJA3UG2GzDcfUpJJKEGRoPxIy2KTYK3XgjIQwPVoDuPMcyfsCAk%2BWw6A4nwrBvBJoR2QUNijtDH%2Bq4FAJjS%2Fm6cC0O0o%2BNwuW8Prf9N2vF%2FraA3Vwye%2FrQijnxZrSgF%2BvVdai&X-Amz-Signature=a820c8b47b26315465917df15da9f2a54fb752eb09e89719e978e588260e094a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2SW4LW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjIDeL2VPVY2raLIQBC7M2i%2Fi62hsvyMeXzRIgF2PEAiBBuM9te41QelLgECHbL5gT7XlxGNG97%2BFoYn8WnVyP2SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeA9QIEiaJqzlTtPqKtwDBLuSQNA2byCXwnnZatkC1EixrsZlkiA1rjs36qZ74PjLhU%2BbZhTWZ1GMnGAW0p9XkR11jmemgphnxyqca5tHKQirrwCMZ77J6qLK8vm9g10l2XnEpwjOMPToixkwUSjJ%2BngWFqLDOf%2B7%2BIB0I0MVEKRF3IeCj59McgGQxIgLFgXw6cyohTZOaCnSHJgueV8D1IdTl%2BPTdSW6cnFs5LHSZSe%2BiNoK9PvPZ9Ong%2FMV6YYxD5eoOscGsqIN%2FYorj4%2FOB%2BUTQEpT21b2E25dnBHz6Ym0Vv68p580EzIZraqBYDwGEIhWwdxsQRKv%2F70cAWcWJUspAkYajeQ%2BD8OfRgGWVaoCmecNcc77oCkc%2BqBwbnWNkO7WeoT55qAj45KCK2L2v%2FDz62eWMEToux7XDAYU%2BWD8xdV3s%2FKWzUTWV0leMGb1CmK3FTzeOPNwYmKn5CPi7lWcSuxDwNHyPiMFZFp7dIeGvnpgAsDukmZXXHRioevT7%2F2g%2B0tPhhDzuakWIkNxYvbi6PNIjc0rfTSNgx96LX1ttg388jmYHy2Egc7HUZM6T7XQDV%2B%2Br0xQx6zLd5CGSIhyxD7aQruHrl9FdmdajGdHiksyoIMdrNRnneY3A3iIAdZREyQqLLYCNocw8%2F3SyQY6pgEIgC4b3CfDfZeSwa1KKuWJg%2BkkGDo4QzAlkoiPPhehVkYtkI%2FZMYsq20Acuk53pZaC0oJ88YAQuqRsQqiggTftWAAhJA3UG2GzDcfUpJJKEGRoPxIy2KTYK3XgjIQwPVoDuPMcyfsCAk%2BWw6A4nwrBvBJoR2QUNijtDH%2Bq4FAJjS%2Fm6cC0O0o%2BNwuW8Prf9N2vF%2FraA3Vwye%2FrQijnxZrSgF%2BvVdai&X-Amz-Signature=3b47e37c87a0ed4d68632ac0f2ea82c89457dbb8a929f70388159e9a2bca10d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

