---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTJ762L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHxj7irOr8XjXb3rRQJ9kHdUfoBZJevQxulfKMrLVq%2FAAiEA83Y93U50GGTzoyxh7bLnKvknX5Y1KweTB2EeqpgM%2Bzsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMU1G0WjjzQqcZ6PgCrcA8QYp0dFWdfKXFALXQVg5V45%2BE90aTjZ8KwiUF4mLmO6Fguql2sYJG8BXgN20z49D9mcTgTFmGyuFu7I0WnTDDYdeOOotf6Iwh0iLBV5eh8KcFxzrV6gMFifDBobXksEHN%2BvLlJUYnzJLIxvOzezKQU8kqbGlnw%2F4mQc2VMdxSxnh0OXiRuffYUEOeqFGA4ey1%2Bjw%2F2Wu0nDNlrKhkwPA6gsYyt%2BvFyNKoTbGl43%2F1h6m9R4qFjUcppYRuS%2FehjOxDkv%2FriPiXDL17hqOagPAwJacGEh6xFhZsrOnQ9buYmnpiSf%2BITfVaoLL7HAQti9vZlshXSf2STITr3UR8%2FTpKKzvLEOS5dgnBV2oIyu5RvYifF2DVULfrczx0j8lthd0W4NzU403Xv9rLlfRieKKInsP7k9pCOZCGOeh85BZvU4bFlBAYc36RRibbp5r4NnbUm7HXXziA3eY5qtasoE2GoGn%2FtTMTxazAodUfkgrcrgmVVm5jq9xXKDHlEaMyeWMQhp9b6WYRsTC3zGPvdXWvcYkj%2FvdQUzuHtkp%2BX8jUuVDyFd175%2B6Ys4ZbqafIeJoOFsRNbKKyBBRyDCP2Na8t0SfJgBEVevpC%2B%2F6cWw1eURTApHJDyZvXhif2WNMOXJxckGOqUBgLVBaaewn4HIqNVKwd2IdCN25ECSBSFroDEFngmiyhA4tq6hxJe8%2BbAU4P%2FfEr0p0aawbIFbsW9x1523pk0mKiJv4bZ%2F458a4fSnAVAobg%2FLalNIwhrOtXCVtog2U3o1xjAY20H8p8c4azpltyvKhdz3dPHT%2FJ4gxSXKFgeWVc2gT5%2FU%2FJSUIZ0%2FTAUp5NhUSA%2FGYYAmkiCDYOtQhVazlcAocNzS&X-Amz-Signature=f6672d4f1c4b3fe9256b5ae62673c55c9fd38e96e04ef0965606dacebe210f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTJ762L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHxj7irOr8XjXb3rRQJ9kHdUfoBZJevQxulfKMrLVq%2FAAiEA83Y93U50GGTzoyxh7bLnKvknX5Y1KweTB2EeqpgM%2Bzsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMU1G0WjjzQqcZ6PgCrcA8QYp0dFWdfKXFALXQVg5V45%2BE90aTjZ8KwiUF4mLmO6Fguql2sYJG8BXgN20z49D9mcTgTFmGyuFu7I0WnTDDYdeOOotf6Iwh0iLBV5eh8KcFxzrV6gMFifDBobXksEHN%2BvLlJUYnzJLIxvOzezKQU8kqbGlnw%2F4mQc2VMdxSxnh0OXiRuffYUEOeqFGA4ey1%2Bjw%2F2Wu0nDNlrKhkwPA6gsYyt%2BvFyNKoTbGl43%2F1h6m9R4qFjUcppYRuS%2FehjOxDkv%2FriPiXDL17hqOagPAwJacGEh6xFhZsrOnQ9buYmnpiSf%2BITfVaoLL7HAQti9vZlshXSf2STITr3UR8%2FTpKKzvLEOS5dgnBV2oIyu5RvYifF2DVULfrczx0j8lthd0W4NzU403Xv9rLlfRieKKInsP7k9pCOZCGOeh85BZvU4bFlBAYc36RRibbp5r4NnbUm7HXXziA3eY5qtasoE2GoGn%2FtTMTxazAodUfkgrcrgmVVm5jq9xXKDHlEaMyeWMQhp9b6WYRsTC3zGPvdXWvcYkj%2FvdQUzuHtkp%2BX8jUuVDyFd175%2B6Ys4ZbqafIeJoOFsRNbKKyBBRyDCP2Na8t0SfJgBEVevpC%2B%2F6cWw1eURTApHJDyZvXhif2WNMOXJxckGOqUBgLVBaaewn4HIqNVKwd2IdCN25ECSBSFroDEFngmiyhA4tq6hxJe8%2BbAU4P%2FfEr0p0aawbIFbsW9x1523pk0mKiJv4bZ%2F458a4fSnAVAobg%2FLalNIwhrOtXCVtog2U3o1xjAY20H8p8c4azpltyvKhdz3dPHT%2FJ4gxSXKFgeWVc2gT5%2FU%2FJSUIZ0%2FTAUp5NhUSA%2FGYYAmkiCDYOtQhVazlcAocNzS&X-Amz-Signature=36848c0e90167503bae3d820b5d7a63f87754a6295d439d2aa1e102ba5a04517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

