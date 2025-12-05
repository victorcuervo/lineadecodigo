---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHRSMDU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34TpzXKrqe4G5YQY5xYQyEnocY61g3Pdvu6mnKcGLigIhAJ4%2B3mOW3MwqFsh%2BmpJPQU6m9j%2Fgb6Bdph7rmeAi7gScKv8DCGAQABoMNjM3NDIzMTgzODA1IgzQ3DqBGK0zfLlSx1Eq3AP0OOUQtGj%2F7E2gFt38ShdZQXCxctGzs3%2Bph7qrzupOu1PKfBMp5HuUg8cjwmFZ149wHpsbgaW9eC98foFNJ%2FkkyHn2CeFa68w6HEYE1SnXq0Y9hRyvS4Cf4T1kS0vxBtH2Wd6JpdJySzFlvjEddWSHncAcGKzP7L684XnD6wr%2By%2BRBUe6p%2Fzfx6qktCxedD7V1cgcBRSV0RG1VQzwfw%2BjIcaUtrBv5AI4dCvBTgpJ%2Fe4Cs3ajpNwZjaWt9FLQWBZtSevPpKiL5LdzwUlVhWZ7iIlX%2F87zTTJHhZ9hgTVfEOdIZKy1iUsxBop7cj7Lty3cm4Coz2zVahLmyW%2FqZoYqcW6U2MR%2FKj0vUjjnrPd0Mt%2FrLSM1Qs8JrvIHoO%2BxadBVVbWfjuxaKLm7dY7WhBp%2BCpXg5eTnYmno%2BWtrg%2FQLVIMNNo0wNB1UEQT1hVXrUrolZ6Qz4UmaOsmxV7xXiJlXwvdhleY4P8%2BPdn1hmy%2B7FS1ESKQF7haYiDeHF73kkSKP992SmljyunHxrNxwS6P4E83gjH2c3JxFC8%2BKcwgWUjkq9gOesyWkaZBlvubgFF%2BaRRvff8Dn20jiwXyL8DbHb2viUgcwA8OtZpZoIJ6QPJuumOqCd0Lw28rUs2DDQ7MvJBjqkAcIaH1FOnJC1yRSTLdUv1iNIm3GVvHpxpF9EoqVhDPfnd5HJam1IM6MdLTEi2oJUCJK742T8Q91RsWZkG%2BaAgbDKc8PGHCnR6p4WxsLxEby3Q4O6Y7x6C5OqvpnKph6eGV%2Fkhoz5f7rClKSa9CPmv4t38higHVAGKdo%2FTYIOU9e3VOm%2BL4GhfJR411MCeOqDtYwwf6JZyMOcKWBYMZoxxqgrRQdS&X-Amz-Signature=d4568e21cc919b0d77d39cadef6c24f5009d124dda8073b6cbf17cd9421459c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHRSMDU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34TpzXKrqe4G5YQY5xYQyEnocY61g3Pdvu6mnKcGLigIhAJ4%2B3mOW3MwqFsh%2BmpJPQU6m9j%2Fgb6Bdph7rmeAi7gScKv8DCGAQABoMNjM3NDIzMTgzODA1IgzQ3DqBGK0zfLlSx1Eq3AP0OOUQtGj%2F7E2gFt38ShdZQXCxctGzs3%2Bph7qrzupOu1PKfBMp5HuUg8cjwmFZ149wHpsbgaW9eC98foFNJ%2FkkyHn2CeFa68w6HEYE1SnXq0Y9hRyvS4Cf4T1kS0vxBtH2Wd6JpdJySzFlvjEddWSHncAcGKzP7L684XnD6wr%2By%2BRBUe6p%2Fzfx6qktCxedD7V1cgcBRSV0RG1VQzwfw%2BjIcaUtrBv5AI4dCvBTgpJ%2Fe4Cs3ajpNwZjaWt9FLQWBZtSevPpKiL5LdzwUlVhWZ7iIlX%2F87zTTJHhZ9hgTVfEOdIZKy1iUsxBop7cj7Lty3cm4Coz2zVahLmyW%2FqZoYqcW6U2MR%2FKj0vUjjnrPd0Mt%2FrLSM1Qs8JrvIHoO%2BxadBVVbWfjuxaKLm7dY7WhBp%2BCpXg5eTnYmno%2BWtrg%2FQLVIMNNo0wNB1UEQT1hVXrUrolZ6Qz4UmaOsmxV7xXiJlXwvdhleY4P8%2BPdn1hmy%2B7FS1ESKQF7haYiDeHF73kkSKP992SmljyunHxrNxwS6P4E83gjH2c3JxFC8%2BKcwgWUjkq9gOesyWkaZBlvubgFF%2BaRRvff8Dn20jiwXyL8DbHb2viUgcwA8OtZpZoIJ6QPJuumOqCd0Lw28rUs2DDQ7MvJBjqkAcIaH1FOnJC1yRSTLdUv1iNIm3GVvHpxpF9EoqVhDPfnd5HJam1IM6MdLTEi2oJUCJK742T8Q91RsWZkG%2BaAgbDKc8PGHCnR6p4WxsLxEby3Q4O6Y7x6C5OqvpnKph6eGV%2Fkhoz5f7rClKSa9CPmv4t38higHVAGKdo%2FTYIOU9e3VOm%2BL4GhfJR411MCeOqDtYwwf6JZyMOcKWBYMZoxxqgrRQdS&X-Amz-Signature=bcd1076d54266d2821476def21278b8f80d3740b71db98b9bba6de209869fbc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

