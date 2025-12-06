---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q474XHSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7jGT%2FEBQOVbIZQ0dyE%2Fi5TeaMCRZLfoW52LOncpfYgIgX1Y2GfwBdBLrQbxRwiJqQ2MD%2FnyjBb4sa8OXmiB%2BICYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAYhipUZkIQRBNkDsSrcA1cJxVFPgQdtC3%2FjjDpyYIOSv%2BABD8DEOwrD2EHGtNtQssshdWGvsWikR8hHUmydzecvdFUVuWZlKhSGxzuMWUlZ3YIgsKuRWqDjtlww7oN6PGyoCJLZdu%2FGFHDHh1TO%2B0kb%2F7oTnQ9Thjui9u8%2ByBFLWnGS8iHERbcH1RLpVB1QLpmWGhWiCpP3uCq2KciJWlpsPwxM4cgYKoGHzvB%2BgKHlbT9iMaI1ezngUS%2B0uLNNDBg9ERnJlhaPCi1y3%2BdesiwutAvNOs2q3VV1sIWIo2aLDcxMvi1%2B9ZZ2y8pAQVv1JGUARS7hynAdZzqbSyWIgscQHntvIdztfMWpR5uHlZ91oL%2BExFy6EiGvRg3hY%2FlFejsn1n04EeV3Y8LSvAlQDqAW1j1nyswA2lKlhkApUuP0C0dG7moewlTCHM3xfis%2BYw6QSOOF9HGyVSJwoPVVoDz2uRXOMhOzE0%2FTQdYzb05uCu5fUD7cbo7JipFkSJDG72Ai5vqUghfBztQY7nso%2FnKqG1CZRerV4Bv48AbsjULm8aLiH4PAJUSFj2lZMImG5Lt0uFrDjWO516kczEEE0aJZrq%2FM0BQL3QNpRE1gd5VFbxvA%2Bf4j%2Flu7vwj%2FLTd2DWPAZnrM03S8Y1dSMOr8zskGOqUBE9%2Fk7YFotJk0ToLsgmgyawgVpB3MvedNfA9pb%2F9QGz1MRY6H35XTOl7Icq2PO0edP9gixaYugTK2J2lhqeoMFUHNznhzGMlOAEAINWQ9Qzq1Y54AWsrt6qY%2BWE7nLOhSBnQutk%2BJQj26RJiTsCWJDa9wvaIpJ3AAVTlHlP2ZBwVptRhhJWHVV0N5rr%2Fl19Lbz4SI0FVU8VyHkXQveJkw8mBkDij2&X-Amz-Signature=3f64b944888add3954eba204808b9a8292a51cf40a32b0c47c2336e1c42beb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q474XHSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7jGT%2FEBQOVbIZQ0dyE%2Fi5TeaMCRZLfoW52LOncpfYgIgX1Y2GfwBdBLrQbxRwiJqQ2MD%2FnyjBb4sa8OXmiB%2BICYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAYhipUZkIQRBNkDsSrcA1cJxVFPgQdtC3%2FjjDpyYIOSv%2BABD8DEOwrD2EHGtNtQssshdWGvsWikR8hHUmydzecvdFUVuWZlKhSGxzuMWUlZ3YIgsKuRWqDjtlww7oN6PGyoCJLZdu%2FGFHDHh1TO%2B0kb%2F7oTnQ9Thjui9u8%2ByBFLWnGS8iHERbcH1RLpVB1QLpmWGhWiCpP3uCq2KciJWlpsPwxM4cgYKoGHzvB%2BgKHlbT9iMaI1ezngUS%2B0uLNNDBg9ERnJlhaPCi1y3%2BdesiwutAvNOs2q3VV1sIWIo2aLDcxMvi1%2B9ZZ2y8pAQVv1JGUARS7hynAdZzqbSyWIgscQHntvIdztfMWpR5uHlZ91oL%2BExFy6EiGvRg3hY%2FlFejsn1n04EeV3Y8LSvAlQDqAW1j1nyswA2lKlhkApUuP0C0dG7moewlTCHM3xfis%2BYw6QSOOF9HGyVSJwoPVVoDz2uRXOMhOzE0%2FTQdYzb05uCu5fUD7cbo7JipFkSJDG72Ai5vqUghfBztQY7nso%2FnKqG1CZRerV4Bv48AbsjULm8aLiH4PAJUSFj2lZMImG5Lt0uFrDjWO516kczEEE0aJZrq%2FM0BQL3QNpRE1gd5VFbxvA%2Bf4j%2Flu7vwj%2FLTd2DWPAZnrM03S8Y1dSMOr8zskGOqUBE9%2Fk7YFotJk0ToLsgmgyawgVpB3MvedNfA9pb%2F9QGz1MRY6H35XTOl7Icq2PO0edP9gixaYugTK2J2lhqeoMFUHNznhzGMlOAEAINWQ9Qzq1Y54AWsrt6qY%2BWE7nLOhSBnQutk%2BJQj26RJiTsCWJDa9wvaIpJ3AAVTlHlP2ZBwVptRhhJWHVV0N5rr%2Fl19Lbz4SI0FVU8VyHkXQveJkw8mBkDij2&X-Amz-Signature=f94fd291a7424375590558864d907fc3e2600e2af14cd92e9f3813c6180d1d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

