---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KR6Y4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDvI8l6Kh9dAtB%2BjN%2FlPFvkfvdth3qtTcRYYrSc1%2BBQ4AIgW2LMCjZGetdQH6wDGJPVpr3PTsJ8qii%2FqagaTyE35Sgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBRi9WNR7%2FuSq%2FllzyrcAzXEvBrL%2BGdLgN61OWgRLqNWHYUZG8fG8%2FS0Ly5kUhq3Fa1JFg3t02ro9vGLiWxjUYJkKdmcbWWtv%2B50E19aZ%2FR9QkFdm8rELAqlqBVSSOE9kq8NoIqqqlE62u52eowAyFJF%2FgYkZDmj%2BPTmp3jrPSO8DzwK9W4PaF4kq6Gnx5xU%2Bg442W7dO4MLpzJ4wAhip1QCaeVNzeeUWQJSNJmqu%2BSY0dwZbICrFrDhvnvkNAS0rdzijtVvvKSAeKe8RyQV5n54zXtfP4Wcphhsw13BJTrfTFc3a82g4buro30Ov4Pxbq2TpXQFs4RyW5wjvYiNRSnWI194ydIPPvXT0n3g2HoiMil0OzD6gsareqEv%2B6dgK%2Fq7R5l%2BCtj0HgX56UUQkMJaPowxt2OJ8qqrHVySXXdJmxTC5C7KbUupLm8m0Bm7OcoPjPOtm77uey8Jzy2wB2Ku6EIAwO7tkzZT5bSkqilqDvsBiktpZUFI4nyFkfxggehUnBo76UGLwJm0IME8%2FqvvaxzHistAND%2Bgg4YnkJQ03y84rGoCQescpu20zXaPePuR%2BRI6pKQn9cShNkuZESO39Ox3ep%2Fm9ZoiQXzts6Ngl6ppUjf1xq%2BlC8OyEZdmdMi%2BntLrWaJRJ7QyMLG%2BwskGOqUBynLtADQtYBRZybQABw82jl0iSLRv%2BJfJQRKTv2qMlaCtWp3YA1egCBYfFNUXT4wGQ80NFPf%2FA5eHUDVaUByePBUMZpoBTkCOOpjJszRhB3zYDnsxzrAIF4Q4UokVp2bVWlHwnmRQWqdjpWt1mC61Lq5PGzNkqrHe2sXzTJpNSnbJJSS9pdz%2F9lLIxpjHPSeReKdlKhRo9IrWRpguNyZD03EgdtH3&X-Amz-Signature=afa70412e1f4bd32d9b819ff933cf2f275723bd20575e6bd55e7029c00c4fa3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KR6Y4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDvI8l6Kh9dAtB%2BjN%2FlPFvkfvdth3qtTcRYYrSc1%2BBQ4AIgW2LMCjZGetdQH6wDGJPVpr3PTsJ8qii%2FqagaTyE35Sgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBRi9WNR7%2FuSq%2FllzyrcAzXEvBrL%2BGdLgN61OWgRLqNWHYUZG8fG8%2FS0Ly5kUhq3Fa1JFg3t02ro9vGLiWxjUYJkKdmcbWWtv%2B50E19aZ%2FR9QkFdm8rELAqlqBVSSOE9kq8NoIqqqlE62u52eowAyFJF%2FgYkZDmj%2BPTmp3jrPSO8DzwK9W4PaF4kq6Gnx5xU%2Bg442W7dO4MLpzJ4wAhip1QCaeVNzeeUWQJSNJmqu%2BSY0dwZbICrFrDhvnvkNAS0rdzijtVvvKSAeKe8RyQV5n54zXtfP4Wcphhsw13BJTrfTFc3a82g4buro30Ov4Pxbq2TpXQFs4RyW5wjvYiNRSnWI194ydIPPvXT0n3g2HoiMil0OzD6gsareqEv%2B6dgK%2Fq7R5l%2BCtj0HgX56UUQkMJaPowxt2OJ8qqrHVySXXdJmxTC5C7KbUupLm8m0Bm7OcoPjPOtm77uey8Jzy2wB2Ku6EIAwO7tkzZT5bSkqilqDvsBiktpZUFI4nyFkfxggehUnBo76UGLwJm0IME8%2FqvvaxzHistAND%2Bgg4YnkJQ03y84rGoCQescpu20zXaPePuR%2BRI6pKQn9cShNkuZESO39Ox3ep%2Fm9ZoiQXzts6Ngl6ppUjf1xq%2BlC8OyEZdmdMi%2BntLrWaJRJ7QyMLG%2BwskGOqUBynLtADQtYBRZybQABw82jl0iSLRv%2BJfJQRKTv2qMlaCtWp3YA1egCBYfFNUXT4wGQ80NFPf%2FA5eHUDVaUByePBUMZpoBTkCOOpjJszRhB3zYDnsxzrAIF4Q4UokVp2bVWlHwnmRQWqdjpWt1mC61Lq5PGzNkqrHe2sXzTJpNSnbJJSS9pdz%2F9lLIxpjHPSeReKdlKhRo9IrWRpguNyZD03EgdtH3&X-Amz-Signature=6d3fa3eeb4877ea254253ee60b890df73da59bc2e3c7e88936de5a33e43630e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

