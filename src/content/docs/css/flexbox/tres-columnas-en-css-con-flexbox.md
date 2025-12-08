---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPESU4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKQncvpamzIlMqSxyi4F0Ep6sGhoMkcIxZHwZwifHnbQIgAsU%2Fow5N2O0RLwCYZsGb%2BBg7WneK6rnI5qBL3pWwDgIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BX5yqh956Wu0qv3SrcA5UqsSnQJzTEB0z6uZ3VUevnJCN%2BEOf2WDQyk2VJdbJWnKgNWsY2fzuhsGK2T3pJvTCx15mQstESOu2z0vRaKNb%2FoTnwteLzZ6IkZp09RDvC2tuZLHyWb2ZPy%2BkBjvbESv3R7ebwuxriqa4kcK5US9bNpPd8DEWyXUOdug1qzbcQFI05d3SNks5e6DmxVyg%2BT00RsMzL79i30Vo13gDY%2B49%2ByVEcYlopayjs6GrWxDOujGPth1g%2FHYYPplBRCOnBq4OtoOpZTwyREDlEM8whP0GIl8OWk7d4aYj1wH%2FvxVD7gYnEF6xJJu8JXaeR8CMaFf%2BgctSrYYVwekauX4YZYQWMKAWhLDSHORozCUZU99HMcywaChNgOzngh8tty47fbYCng1CbKctmSmUwnmp5QoI4YHosmvRpPHuYcSJoELja%2BSzHtpLZuu9mPJ1y1abmWvH9GTHY5MaTl3H4bz6ToiFGe2ixtp56u6VIiAoBzpHWdOzXI%2B9%2Fvzv71jHQBM1E8bNgQgAUL4%2FlQaMtMfEmBo%2F91hiuw6wDsxJcAWvJcRNq5atT2q1AU0mNWRNUHdxP7eX2nqt%2BDOxhlWcjBwiRHESTvy83GQ1f3r3OAJAxcwsoED3nMjSNdC5MEJC9MMyU2ckGOqUBHz%2F6jAVXhSXNPQVfFbkdVnnPKy0asjj5v%2FEH15%2BJB5Q%2FNVeS%2BPpRVtKZ1T1Cl5aK2juhpOhFSxZvJ%2BjAKXxmECkArYR5i%2BmYvnlrxwZXGT0Cmi%2FSVQh0OJqk0KRWe21A6puejnE49JAJNoD12lw7Cx8gt%2BYiohOtLA2OrfzwHTW9tL4RfHlwKmNCk7P1CevsS8b85aoJhRS5nXjaKEvZDx5wlFwZ&X-Amz-Signature=0e175e71f7679a7df405679147cb889610fe188401e8f45b20c7d7bbed70dbce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPESU4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKQncvpamzIlMqSxyi4F0Ep6sGhoMkcIxZHwZwifHnbQIgAsU%2Fow5N2O0RLwCYZsGb%2BBg7WneK6rnI5qBL3pWwDgIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BX5yqh956Wu0qv3SrcA5UqsSnQJzTEB0z6uZ3VUevnJCN%2BEOf2WDQyk2VJdbJWnKgNWsY2fzuhsGK2T3pJvTCx15mQstESOu2z0vRaKNb%2FoTnwteLzZ6IkZp09RDvC2tuZLHyWb2ZPy%2BkBjvbESv3R7ebwuxriqa4kcK5US9bNpPd8DEWyXUOdug1qzbcQFI05d3SNks5e6DmxVyg%2BT00RsMzL79i30Vo13gDY%2B49%2ByVEcYlopayjs6GrWxDOujGPth1g%2FHYYPplBRCOnBq4OtoOpZTwyREDlEM8whP0GIl8OWk7d4aYj1wH%2FvxVD7gYnEF6xJJu8JXaeR8CMaFf%2BgctSrYYVwekauX4YZYQWMKAWhLDSHORozCUZU99HMcywaChNgOzngh8tty47fbYCng1CbKctmSmUwnmp5QoI4YHosmvRpPHuYcSJoELja%2BSzHtpLZuu9mPJ1y1abmWvH9GTHY5MaTl3H4bz6ToiFGe2ixtp56u6VIiAoBzpHWdOzXI%2B9%2Fvzv71jHQBM1E8bNgQgAUL4%2FlQaMtMfEmBo%2F91hiuw6wDsxJcAWvJcRNq5atT2q1AU0mNWRNUHdxP7eX2nqt%2BDOxhlWcjBwiRHESTvy83GQ1f3r3OAJAxcwsoED3nMjSNdC5MEJC9MMyU2ckGOqUBHz%2F6jAVXhSXNPQVfFbkdVnnPKy0asjj5v%2FEH15%2BJB5Q%2FNVeS%2BPpRVtKZ1T1Cl5aK2juhpOhFSxZvJ%2BjAKXxmECkArYR5i%2BmYvnlrxwZXGT0Cmi%2FSVQh0OJqk0KRWe21A6puejnE49JAJNoD12lw7Cx8gt%2BYiohOtLA2OrfzwHTW9tL4RfHlwKmNCk7P1CevsS8b85aoJhRS5nXjaKEvZDx5wlFwZ&X-Amz-Signature=93894e844e845e9843daf435ba8124a3ed393c87f629e64d771957e623780a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

