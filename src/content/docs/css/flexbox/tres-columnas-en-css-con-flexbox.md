---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVS3K4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIA%2F1W%2F9nhaCpjD1UOPr2rYrCyFV7vx1%2FDv4Ghf%2B9zeGQAiBt6EG55aoX4fdc91qy2EdRC%2F%2FEwV46m9k%2F%2B252r6ClPSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMNj7I0PULH3lpMwHgKtwDl%2FwF8pXC%2BrQL5Y%2BzLGCF39VfERK%2B3vt5IUdctnBOG5%2FSBqr%2BdykrcDLQFtlZsLhgWHQT44z77%2Fl2QSyzZxnb6QJGokQ0k12Uxfyoq0keTuzcOjU7DxkF8KdqxQ3ldj8g3ZvX6zITq9SeWJjAu92EnTumKNN%2Fak%2B%2Bdil6L59DKvJbanxCSFK3u1JqLKp4IOZMhW9hxKOqrQFfmY5uyoE1QG1IZ8dtozGe49mVEQ%2Fk376UwR3dVFNvVSFJ1u6I9xp%2F1ML0lcVCzAou6yuFu6daneTTa5P%2Fyzsc50XEOSBqv30bqhZc1DbWJKcUT3bpilPUPd%2F%2BI9XOuUBln5ijZoC%2BzQOdf4VFKV0VVbp4ksUyAArjqBHbciJh7ySR9IvqdAxLJQffODm6hVm%2FIsdCWnPzcC6LA90MOrhCsXKHJ%2BB098fZXgjC3iNjEcCxDM%2BD0RD%2BIkqb0wqRsYT6WQHRawyDmcrH3VqKlBuogGXDTFjke7k9%2Bvb8BifXKtTS5khs0yAhWLtrK98ccAah17rcf%2BU0ZbtYSh3b%2BkVcUfCZrypV0QHY4g2kuwPqmH71gpIqMEo97pGnG%2FP3ezvxLMX%2BuV0gyjXpLEx8o3WiUB6UujM4SA4ccDYoS10Uhswoph4wo6rFyQY6pgFmQtiwK%2BfNaHRwNwICP%2Fl3fx5u%2Bjx%2BSL%2Fkfmcj%2Bo%2F8ttvgwPqaIdE%2BnP5WlmUG%2BuJKjeEC4iukYNeAsldOrOd6sYlPG1BpZ5d9hI5vGyvGmhjFqIVJ75zxvZBNu4zCogUIXFXF2pIgtJHZGl4wbYIwmOPvWeT049bHiy0UR8VwuD%2FLKTewJjRVnQNE68FbQCAHj8sDt7Uw7WZANtSxxP7u33oSyx9K&X-Amz-Signature=f2edb24a7c947346eb8a1fb4252c54da7af6f55ce3694b556544a78b696db92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVS3K4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIA%2F1W%2F9nhaCpjD1UOPr2rYrCyFV7vx1%2FDv4Ghf%2B9zeGQAiBt6EG55aoX4fdc91qy2EdRC%2F%2FEwV46m9k%2F%2B252r6ClPSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMNj7I0PULH3lpMwHgKtwDl%2FwF8pXC%2BrQL5Y%2BzLGCF39VfERK%2B3vt5IUdctnBOG5%2FSBqr%2BdykrcDLQFtlZsLhgWHQT44z77%2Fl2QSyzZxnb6QJGokQ0k12Uxfyoq0keTuzcOjU7DxkF8KdqxQ3ldj8g3ZvX6zITq9SeWJjAu92EnTumKNN%2Fak%2B%2Bdil6L59DKvJbanxCSFK3u1JqLKp4IOZMhW9hxKOqrQFfmY5uyoE1QG1IZ8dtozGe49mVEQ%2Fk376UwR3dVFNvVSFJ1u6I9xp%2F1ML0lcVCzAou6yuFu6daneTTa5P%2Fyzsc50XEOSBqv30bqhZc1DbWJKcUT3bpilPUPd%2F%2BI9XOuUBln5ijZoC%2BzQOdf4VFKV0VVbp4ksUyAArjqBHbciJh7ySR9IvqdAxLJQffODm6hVm%2FIsdCWnPzcC6LA90MOrhCsXKHJ%2BB098fZXgjC3iNjEcCxDM%2BD0RD%2BIkqb0wqRsYT6WQHRawyDmcrH3VqKlBuogGXDTFjke7k9%2Bvb8BifXKtTS5khs0yAhWLtrK98ccAah17rcf%2BU0ZbtYSh3b%2BkVcUfCZrypV0QHY4g2kuwPqmH71gpIqMEo97pGnG%2FP3ezvxLMX%2BuV0gyjXpLEx8o3WiUB6UujM4SA4ccDYoS10Uhswoph4wo6rFyQY6pgFmQtiwK%2BfNaHRwNwICP%2Fl3fx5u%2Bjx%2BSL%2Fkfmcj%2Bo%2F8ttvgwPqaIdE%2BnP5WlmUG%2BuJKjeEC4iukYNeAsldOrOd6sYlPG1BpZ5d9hI5vGyvGmhjFqIVJ75zxvZBNu4zCogUIXFXF2pIgtJHZGl4wbYIwmOPvWeT049bHiy0UR8VwuD%2FLKTewJjRVnQNE68FbQCAHj8sDt7Uw7WZANtSxxP7u33oSyx9K&X-Amz-Signature=7633c691ab2e6da4099bf3ec6338b6424b5651f5a846e8aa944dcdc65c52d8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

