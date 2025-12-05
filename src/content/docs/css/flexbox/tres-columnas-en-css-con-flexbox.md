---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ27KJ4D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Q%2ButqRK%2F8EVzcIAbBQy5woztx39HlZdPjO1k8QMbFAiBYzdll9JTVf2oPo1ngHtabZJjL4AfRaMzE5UOvD23m%2BSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMI6syJeTDItYdovrTKtwDKFS%2B9WNgywll8ZahZlHbneF8ZbHfSpeMz5YnpDqO6euRBY48he14ql1OZ1Mo1sPup3L9nvgBRX83YvDDm%2BcjJD8DRW8chDBHDVwTJq7WITPDpY0ZSOk9McvfypFZ0vrMdITXersJh%2FWH6%2Browptr28xAy0AqhfN8%2BKTJtDlNU0krqrgkDXxZm9l2baZa38c%2FN7LACNEispTQBjnilIAs6DS5L%2FEq2x4VpUNhdTmhYxh3mjTuy7xPOMDq5SAQOMq%2BOZ6u4sx%2Fgxhv5KavOQ%2F5COAHsHs6xluOzC7HMRrSOI%2FCy59nxuL5prDVILX8upw2VTUN5G6PP%2FYY2gqojTvMyUyLbKyhh4VuT6eI6GJOxQWkNi%2FVMsHWMugqbSZeknWE2m2xlU3NCNdxV0C%2BuvIFKjsqkb6VEfbOjI1%2BRSz8Fv%2FwYFivmqyXIyyvPi%2B6yMauEDKiJUbafZgD%2B4QnjcQG4VOOdgUUtyQu6xmftCqp0FMRMdhdmIVKLfvz4%2Fn9HkfnVAa68OUKGCdVuwlGLBmqVa8Wqe2ZpAAr3SCmiCvYgNgnnPuzlti8BnO9qZTNzGUo%2BD5htptGJK2mBC%2FqBoPk6FKIBnORD8Mo3BRxbu4cGBTdofsnmaj4cMc0f2swranJyQY6pgFg0qpzDOzS55f04ekPKJYvadHXKKVnR3uJgfd5uAyonQFKnncxShT8%2B3v%2FhB9RpaDQcToqcvH%2BP7zyVLc1P8NJ7d2UHJQkGXLaoBrz%2FkHj3cVfYt0j4AgebUkHF4lgtTeJvvGg%2BN%2Fq3FVR%2BV%2Fd8QKR%2FkXHJGcABzRo32K2DBDDBW9Iwe1LAuYozmfaLJmrHsonnwFzHcAn8xXzTPOfAg7Htzc4r573&X-Amz-Signature=ae60d022751e0b82ce942e638fd43e9cdb616abd8c9bf4ac7a752edd632fa91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ27KJ4D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Q%2ButqRK%2F8EVzcIAbBQy5woztx39HlZdPjO1k8QMbFAiBYzdll9JTVf2oPo1ngHtabZJjL4AfRaMzE5UOvD23m%2BSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMI6syJeTDItYdovrTKtwDKFS%2B9WNgywll8ZahZlHbneF8ZbHfSpeMz5YnpDqO6euRBY48he14ql1OZ1Mo1sPup3L9nvgBRX83YvDDm%2BcjJD8DRW8chDBHDVwTJq7WITPDpY0ZSOk9McvfypFZ0vrMdITXersJh%2FWH6%2Browptr28xAy0AqhfN8%2BKTJtDlNU0krqrgkDXxZm9l2baZa38c%2FN7LACNEispTQBjnilIAs6DS5L%2FEq2x4VpUNhdTmhYxh3mjTuy7xPOMDq5SAQOMq%2BOZ6u4sx%2Fgxhv5KavOQ%2F5COAHsHs6xluOzC7HMRrSOI%2FCy59nxuL5prDVILX8upw2VTUN5G6PP%2FYY2gqojTvMyUyLbKyhh4VuT6eI6GJOxQWkNi%2FVMsHWMugqbSZeknWE2m2xlU3NCNdxV0C%2BuvIFKjsqkb6VEfbOjI1%2BRSz8Fv%2FwYFivmqyXIyyvPi%2B6yMauEDKiJUbafZgD%2B4QnjcQG4VOOdgUUtyQu6xmftCqp0FMRMdhdmIVKLfvz4%2Fn9HkfnVAa68OUKGCdVuwlGLBmqVa8Wqe2ZpAAr3SCmiCvYgNgnnPuzlti8BnO9qZTNzGUo%2BD5htptGJK2mBC%2FqBoPk6FKIBnORD8Mo3BRxbu4cGBTdofsnmaj4cMc0f2swranJyQY6pgFg0qpzDOzS55f04ekPKJYvadHXKKVnR3uJgfd5uAyonQFKnncxShT8%2B3v%2FhB9RpaDQcToqcvH%2BP7zyVLc1P8NJ7d2UHJQkGXLaoBrz%2FkHj3cVfYt0j4AgebUkHF4lgtTeJvvGg%2BN%2Fq3FVR%2BV%2Fd8QKR%2FkXHJGcABzRo32K2DBDDBW9Iwe1LAuYozmfaLJmrHsonnwFzHcAn8xXzTPOfAg7Htzc4r573&X-Amz-Signature=22c7a529b83692ba7a08ab7eae7336c42aa2f0e6f93087a1348ed609ae00bf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

