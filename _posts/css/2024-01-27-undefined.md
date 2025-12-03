---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NU6HEO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDYDOvhsBAZzn6p%2B56qJ59qZfp%2BXpWG7mR2vorQXvzl2QIgN57nMN3Al%2FJ%2FB0FS5UwMV9JeCvom1giPxlyCLpPlTYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGiwOGRnOgxTaBAqRCrcA37jHFNN4Otw%2FKRBDfoZcCTWRpd9Lx%2BSczcyLNbkYxmIHBVH2qfabQL9N5jstYrJ277wAgpJZG0W7%2FtDXiBMsKzh48lVi2RzSjKCzVpR%2BgT0uAKWm31EmVAIESKiHNhGiBgsrCDlF5%2F9qS5H5lFwoRbhpb%2FVciuCbyHMDc%2Bp2gOlE0uxevtgH3p9RMh66iUJhynjJuoHBbqiCa2PSuXX4mFs11IQ8xaF4xYdS3vfxm89FVi4qnFSAW0837IswzhbMstmo5DJ0qFAgPWsFd22oIc4JJ7XdEJmlCbxDjP1%2BuexvzfD4fDJ4W9B2gb1%2BxG%2FCvVgPNGHPg3kkYqf%2BLob%2BhdikkaY9A9eT6A2vsHYp72RUbaKUw6lPZrgAz1mVhUZmIS%2FrmQkI9yPnBmKAIRJ%2FL9TjM4kv2VMVaPTjwj5Fki6CLUB1YlPbGmnRXkWl%2BZk3rkR1rcelIpkROK9ichGpmBTBK1cKYMRp07K2mGWNgsW%2Fqecxa2Xu3vyFnFgSukqatN1xPREV11%2FL3a1X55pC21ewWysOyr7p99yrBCXvG2w0cLYXK1nSXNmVg2e2OMgF3Xh185EOZG5EToRp60KAwvvwaJUJYFd8NtjLQSO7g0zJYpgQzGJuiAM3gmLMJP%2FvckGOqUBeUj3Gp%2FTeOQN9Rgim6bNqEmFxZJ%2BciClYyDoG7Ih0YFn5A9rFOOEfNicTxHqQvO%2FxBOqKAwlVWIXOUpgNzK7R7eOVGgQ06%2F71K13i3vhNnLMl090IT8qboy%2F2bOLG6WjKPbnbwKQaZ%2BN43delzwjS0bdxGEIEvYTqCAUVH4iHSORL0X2IL%2Br%2Fr%2BKBzD5AUX8asH3gWKUJgGZBOgx5Y52FIR1VhmU&X-Amz-Signature=a4fd79202d6f71fc576f8a99e24af39ef700668808661db706dded031cb12dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NU6HEO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDYDOvhsBAZzn6p%2B56qJ59qZfp%2BXpWG7mR2vorQXvzl2QIgN57nMN3Al%2FJ%2FB0FS5UwMV9JeCvom1giPxlyCLpPlTYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGiwOGRnOgxTaBAqRCrcA37jHFNN4Otw%2FKRBDfoZcCTWRpd9Lx%2BSczcyLNbkYxmIHBVH2qfabQL9N5jstYrJ277wAgpJZG0W7%2FtDXiBMsKzh48lVi2RzSjKCzVpR%2BgT0uAKWm31EmVAIESKiHNhGiBgsrCDlF5%2F9qS5H5lFwoRbhpb%2FVciuCbyHMDc%2Bp2gOlE0uxevtgH3p9RMh66iUJhynjJuoHBbqiCa2PSuXX4mFs11IQ8xaF4xYdS3vfxm89FVi4qnFSAW0837IswzhbMstmo5DJ0qFAgPWsFd22oIc4JJ7XdEJmlCbxDjP1%2BuexvzfD4fDJ4W9B2gb1%2BxG%2FCvVgPNGHPg3kkYqf%2BLob%2BhdikkaY9A9eT6A2vsHYp72RUbaKUw6lPZrgAz1mVhUZmIS%2FrmQkI9yPnBmKAIRJ%2FL9TjM4kv2VMVaPTjwj5Fki6CLUB1YlPbGmnRXkWl%2BZk3rkR1rcelIpkROK9ichGpmBTBK1cKYMRp07K2mGWNgsW%2Fqecxa2Xu3vyFnFgSukqatN1xPREV11%2FL3a1X55pC21ewWysOyr7p99yrBCXvG2w0cLYXK1nSXNmVg2e2OMgF3Xh185EOZG5EToRp60KAwvvwaJUJYFd8NtjLQSO7g0zJYpgQzGJuiAM3gmLMJP%2FvckGOqUBeUj3Gp%2FTeOQN9Rgim6bNqEmFxZJ%2BciClYyDoG7Ih0YFn5A9rFOOEfNicTxHqQvO%2FxBOqKAwlVWIXOUpgNzK7R7eOVGgQ06%2F71K13i3vhNnLMl090IT8qboy%2F2bOLG6WjKPbnbwKQaZ%2BN43delzwjS0bdxGEIEvYTqCAUVH4iHSORL0X2IL%2Br%2Fr%2BKBzD5AUX8asH3gWKUJgGZBOgx5Y52FIR1VhmU&X-Amz-Signature=868322e304b03c715de905d7a933c2e93eb10e1d92f4024ecd6e1705672a3acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

