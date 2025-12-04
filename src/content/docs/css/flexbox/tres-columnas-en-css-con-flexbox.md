---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KF4N4ZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAjDXFI1IJ%2B3raDyJ94jOhVMvQNGfBnbflkTqoe%2Ff%2Bt8AiAz4ojdu%2FFHxkA3k4e4CkKn2jIigv0yUaVa0b5prQm5ECr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMsUCCM4XUqO2xRVcUKtwD%2BmLWUscqZdCVrZqbkpVei6%2B3MhmIg%2BBCpZvHmCjiJCCLmvvjhlDwhL6e8Nnld3ZLDXNYi5vPIr%2FChYoBvgE8GdBCSSHA8uQs6K4jtRCvkJrfm4%2BGRs6gPMNj43RzVkXFeBEuMe%2BWgBZIBSeQIJr%2BAczgeZMjxmeX2jtzxflMSaQZJttR0kmdm%2B34LR6a9RfTOfjtPOtwPR4I2asR5Rk36IQcoaqJEajq0zKKj0WTqR1%2Fv8s7etDsziBtI5%2F6NEfBgnEPXvtKpUvOqRnHCYUnsv2LqiOfYnhe4xKtgGFXPXKsXiBsN3md9jKYYA2DA8NFa1B2ZIYnzLteOzcO%2F4Z9h3okKoI8puGqzK1EbIQfql4noIH69b7TYSZQTy1eLEMAr37noEOhbAoO5wMdufVlAiX4Yeiiv3wvjfRixHQxOSKCOs64ZlUrgyd6c8N5%2FmX0%2B5RlJ%2Bhj8eNjJdnzSzaIPD2lAsYVW7QDA7wslyHjeApRnLhk8Xf26cbcL8Qv2iEzK8e7%2FRENpko%2BpBa%2Fb6zfpY74MPfwtysxgzEkdgUMWlTAnDX2vGaeUmw0XNEbhVSbKMaoDCVkbkbBC948SvN4zAnby4mNL9Al2vZjiz4t3oJ9a63A7XotbyrltmEwzoXFyQY6pgG7SdR965JNoLxDs3Ibx1II8YJwDBOfLvYr9iWK4vOHEk1VTCDpG8CRw2pZxvaMzP%2F0rfdQwgG0W7ycyactm02LeDn6TadhgwO%2B1lfAlhpi4uz8YSRlg7VGmY4KzhXsl7m1qXD0WwmPlzGx7w1G3ojkskJ7SrMBkvTnMXFKdTdkr5QgPuTmYMnQChAL4F4Q9B6MMzyzT2WTsX2NcbXIwSjfgsrDuyWU&X-Amz-Signature=0114fe325613343719e9d8b12aa54dff51a1ee52346e2260ad815c64d1bc7883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KF4N4ZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAjDXFI1IJ%2B3raDyJ94jOhVMvQNGfBnbflkTqoe%2Ff%2Bt8AiAz4ojdu%2FFHxkA3k4e4CkKn2jIigv0yUaVa0b5prQm5ECr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMsUCCM4XUqO2xRVcUKtwD%2BmLWUscqZdCVrZqbkpVei6%2B3MhmIg%2BBCpZvHmCjiJCCLmvvjhlDwhL6e8Nnld3ZLDXNYi5vPIr%2FChYoBvgE8GdBCSSHA8uQs6K4jtRCvkJrfm4%2BGRs6gPMNj43RzVkXFeBEuMe%2BWgBZIBSeQIJr%2BAczgeZMjxmeX2jtzxflMSaQZJttR0kmdm%2B34LR6a9RfTOfjtPOtwPR4I2asR5Rk36IQcoaqJEajq0zKKj0WTqR1%2Fv8s7etDsziBtI5%2F6NEfBgnEPXvtKpUvOqRnHCYUnsv2LqiOfYnhe4xKtgGFXPXKsXiBsN3md9jKYYA2DA8NFa1B2ZIYnzLteOzcO%2F4Z9h3okKoI8puGqzK1EbIQfql4noIH69b7TYSZQTy1eLEMAr37noEOhbAoO5wMdufVlAiX4Yeiiv3wvjfRixHQxOSKCOs64ZlUrgyd6c8N5%2FmX0%2B5RlJ%2Bhj8eNjJdnzSzaIPD2lAsYVW7QDA7wslyHjeApRnLhk8Xf26cbcL8Qv2iEzK8e7%2FRENpko%2BpBa%2Fb6zfpY74MPfwtysxgzEkdgUMWlTAnDX2vGaeUmw0XNEbhVSbKMaoDCVkbkbBC948SvN4zAnby4mNL9Al2vZjiz4t3oJ9a63A7XotbyrltmEwzoXFyQY6pgG7SdR965JNoLxDs3Ibx1II8YJwDBOfLvYr9iWK4vOHEk1VTCDpG8CRw2pZxvaMzP%2F0rfdQwgG0W7ycyactm02LeDn6TadhgwO%2B1lfAlhpi4uz8YSRlg7VGmY4KzhXsl7m1qXD0WwmPlzGx7w1G3ojkskJ7SrMBkvTnMXFKdTdkr5QgPuTmYMnQChAL4F4Q9B6MMzyzT2WTsX2NcbXIwSjfgsrDuyWU&X-Amz-Signature=e0278ad9637f7fe898bee7b687b010e42513f376f5ea33dabafb64013e684c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

