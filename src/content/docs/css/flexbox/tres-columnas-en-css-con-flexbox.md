---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KRRKAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY5R%2Bqt2%2Fik%2BxplBQoBOkW6VSOYgzOxsRbrRv3taGFfQIge57UwtX8Wieb6nwPwhKIffnlsLtZHiEw3UgWFpz%2BqFgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BF2Tb5bjuUTGssACrcA8NetG01PVw6Y6%2BWL%2BuQ%2B2TMyI5cpddTydocGFDMRLldD8FvxT6ra91WCTb0mGArAyVMg8qyxqcNcnBU96QZBmpDtGNN8vylF0hV87yM4HjJ0UbuoMtVZHYGSieq1Wgq0lVjBL0hk6FHPDdxGnwG157Ptab0WgGTwUdnF4wO1QL1ke9Ly2Rl8BAS05XNySiL%2Fsax%2F42yvPN56fke%2F4yud7frPXr4F4GbshA8dVodq3bT%2B8KLYZ6WWFYnW0%2FyDvPzee3MvWID6GPw6Lx6EqXwWFyIJc0gM8C5YRuT76vQSlcf3%2ByMz2%2BXOGhL70amQLaxB2OIMkjFAIHHJgWYRBqMx40vyNeOHZa82Ujzf95FKLIdT8Jzgm4LIhP5wgMzJCCD9AL2SQP%2BvgKLqChR%2Fhm%2B5r5DAMQGIsoLgrWQ9s%2F6F3xTjl4XqNzmtP1BonUDcM%2FkcuWtJK45er8l%2FpKs%2BP6VS2Ae2KQj5mL1UQej5H2MXxkV38%2BIzw%2Fgmx8gAQKz6BOm89psq6z42pcdILRaAa6y0aMq%2B3XU3A0lfh3Dj2xeybrKIHbW5zdh1kp7XFIEUhv4b8h5G1N%2FUIAmDsOuzhCNy9jfHtA6GZtnddUSKQxuqwea8hqj%2BxVxg3u0zjY2MN%2F90skGOqUBTvwguE8V0D0Y%2Bm8CpENe262S%2BlfTnqthEuybvwJLuIxNmuUMx03Eqt%2Biln%2BQSGOgW4mAE40EqmnMkPpHfefBj7TXh7YXsWuTkg9xmk%2BpP%2F%2BN0ipOFhzpyF3zs0ePZDhVcy3RU7zhxNa9VAJ8GS7PQVSeGmzo8HxC7xMZqne4cnp%2FuQZ9LHA2fezzJHC%2FAOeFI7lPFKoLdEdRIoyANxCGMeMVZ1wW&X-Amz-Signature=5ce803c144a287ee9cdcb94856f5624b5118472749aa44dc9790e2a9d7157933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KRRKAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY5R%2Bqt2%2Fik%2BxplBQoBOkW6VSOYgzOxsRbrRv3taGFfQIge57UwtX8Wieb6nwPwhKIffnlsLtZHiEw3UgWFpz%2BqFgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BF2Tb5bjuUTGssACrcA8NetG01PVw6Y6%2BWL%2BuQ%2B2TMyI5cpddTydocGFDMRLldD8FvxT6ra91WCTb0mGArAyVMg8qyxqcNcnBU96QZBmpDtGNN8vylF0hV87yM4HjJ0UbuoMtVZHYGSieq1Wgq0lVjBL0hk6FHPDdxGnwG157Ptab0WgGTwUdnF4wO1QL1ke9Ly2Rl8BAS05XNySiL%2Fsax%2F42yvPN56fke%2F4yud7frPXr4F4GbshA8dVodq3bT%2B8KLYZ6WWFYnW0%2FyDvPzee3MvWID6GPw6Lx6EqXwWFyIJc0gM8C5YRuT76vQSlcf3%2ByMz2%2BXOGhL70amQLaxB2OIMkjFAIHHJgWYRBqMx40vyNeOHZa82Ujzf95FKLIdT8Jzgm4LIhP5wgMzJCCD9AL2SQP%2BvgKLqChR%2Fhm%2B5r5DAMQGIsoLgrWQ9s%2F6F3xTjl4XqNzmtP1BonUDcM%2FkcuWtJK45er8l%2FpKs%2BP6VS2Ae2KQj5mL1UQej5H2MXxkV38%2BIzw%2Fgmx8gAQKz6BOm89psq6z42pcdILRaAa6y0aMq%2B3XU3A0lfh3Dj2xeybrKIHbW5zdh1kp7XFIEUhv4b8h5G1N%2FUIAmDsOuzhCNy9jfHtA6GZtnddUSKQxuqwea8hqj%2BxVxg3u0zjY2MN%2F90skGOqUBTvwguE8V0D0Y%2Bm8CpENe262S%2BlfTnqthEuybvwJLuIxNmuUMx03Eqt%2Biln%2BQSGOgW4mAE40EqmnMkPpHfefBj7TXh7YXsWuTkg9xmk%2BpP%2F%2BN0ipOFhzpyF3zs0ePZDhVcy3RU7zhxNa9VAJ8GS7PQVSeGmzo8HxC7xMZqne4cnp%2FuQZ9LHA2fezzJHC%2FAOeFI7lPFKoLdEdRIoyANxCGMeMVZ1wW&X-Amz-Signature=a378b848fe4483e3e31b15a821895340d8b0f1e8c2e3151c2407684c6a1fce04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

