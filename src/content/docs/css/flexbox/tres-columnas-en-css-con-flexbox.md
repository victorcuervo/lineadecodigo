---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSM5OBJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpCTVVY3UQxJjVNBHEepe66OFz6FtW%2BrqydO%2FnCTJSSQIgTFN5PWNcks%2Br05uUlEdpuPuxtuWcoIIEQkfTjjrvPQwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwJCfL5GYR0sbVrsyrcA0EH0jGSz7E7A4axz1thC%2Bh8lzvf2UQUsl9Acl6YU3qoL8vg8hROsMy8z9iiFQt6QD16N%2BgqjP45q7PPRIeupcqDbLEynzHs9AMr0ygPYSsnS%2FNiG7CV19zubW46ORaGWGxrAWUVyqWAWLgI15R9SA7WlwHo81iskXU8NYeMq3QRGwW2XafR9QgZJdKc2629c2chvALHmVTr6kLjfOrLEqqzbM9K6uCwscHqaeJvc2H7aJE3zy3Sl1EQn25%2FHk40nA9%2FgsvDtbZiFIUKdoKwfnz2OLnWDyYczMUm0LY979ig%2F38BRSLEtc5NNtqf2OpTVfJdIxCCn5LvV4tilSY5nOku7k3mLKhPhzuub5HTqkMesSjeO508BD%2BvuKfe4xS6lCUkSCYV0GKAKACivr%2FUzRuArpTGXfiYAMUJ8n%2FMl%2FGD6ED0k2BclnAHVEs4yXCByIo2vjnq1uCO8Zw0v2YpZbGozBGLkG%2Bi%2FsCBvwYTjopR%2BUpbV7DTSYJDofo5tKzi2L7lkLizBk5MAj07%2FA4rGNxyBDv%2FsmSogR9eAg%2B256sB2QMlkgucRStzVUs%2B12SXqVbfBGWg35GH9l6Na68uORZN0HeFzvdXwZwJy%2Bc97NBYUb%2FLtscfqBGpZFyDMLnD3ckGOqUB5JHFPk2QjCaYKmBouM%2Fb0ytmFEBRNvNhrr3G7%2Bj%2BnNZoty9egRftsyJjXVZcFpM%2FokYmzYIzy%2FCZ8C%2F%2FxyRu2rfhHlkIRB3zEL17ftkCJbPEnirYWtVd5M2kBTgfJews%2FTq78fPvlq4efLbswlilwh%2B%2F%2Bagwq9NBnKHsxyjDw5VdVEw4slIdKNz0AVcIuZqpZKkdQafha%2B8oKdvOGGH%2BIofltb5D&X-Amz-Signature=615f913f572403a17c2242479e12a1099556df46dd53d44ac339a0cb4d1823ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSM5OBJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpCTVVY3UQxJjVNBHEepe66OFz6FtW%2BrqydO%2FnCTJSSQIgTFN5PWNcks%2Br05uUlEdpuPuxtuWcoIIEQkfTjjrvPQwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwJCfL5GYR0sbVrsyrcA0EH0jGSz7E7A4axz1thC%2Bh8lzvf2UQUsl9Acl6YU3qoL8vg8hROsMy8z9iiFQt6QD16N%2BgqjP45q7PPRIeupcqDbLEynzHs9AMr0ygPYSsnS%2FNiG7CV19zubW46ORaGWGxrAWUVyqWAWLgI15R9SA7WlwHo81iskXU8NYeMq3QRGwW2XafR9QgZJdKc2629c2chvALHmVTr6kLjfOrLEqqzbM9K6uCwscHqaeJvc2H7aJE3zy3Sl1EQn25%2FHk40nA9%2FgsvDtbZiFIUKdoKwfnz2OLnWDyYczMUm0LY979ig%2F38BRSLEtc5NNtqf2OpTVfJdIxCCn5LvV4tilSY5nOku7k3mLKhPhzuub5HTqkMesSjeO508BD%2BvuKfe4xS6lCUkSCYV0GKAKACivr%2FUzRuArpTGXfiYAMUJ8n%2FMl%2FGD6ED0k2BclnAHVEs4yXCByIo2vjnq1uCO8Zw0v2YpZbGozBGLkG%2Bi%2FsCBvwYTjopR%2BUpbV7DTSYJDofo5tKzi2L7lkLizBk5MAj07%2FA4rGNxyBDv%2FsmSogR9eAg%2B256sB2QMlkgucRStzVUs%2B12SXqVbfBGWg35GH9l6Na68uORZN0HeFzvdXwZwJy%2Bc97NBYUb%2FLtscfqBGpZFyDMLnD3ckGOqUB5JHFPk2QjCaYKmBouM%2Fb0ytmFEBRNvNhrr3G7%2Bj%2BnNZoty9egRftsyJjXVZcFpM%2FokYmzYIzy%2FCZ8C%2F%2FxyRu2rfhHlkIRB3zEL17ftkCJbPEnirYWtVd5M2kBTgfJews%2FTq78fPvlq4efLbswlilwh%2B%2F%2Bagwq9NBnKHsxyjDw5VdVEw4slIdKNz0AVcIuZqpZKkdQafha%2B8oKdvOGGH%2BIofltb5D&X-Amz-Signature=7cde9e42fe1621a6715ed9f38e0dd91159891ddc556425dcf8c4911c4e25186b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

