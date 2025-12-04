---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBUEV43%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGWBZ81cGpj2bABW57wJoPcU2hgXvalcSqYQyoeizYiPAiBNkprPMDvEJDGltInLx41HFtM0eOhuU9RdzYCzHcRoUyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMoyDIM1tPs7EViKRSKtwDf0QqggutkHdOn4RoLr15AaZVa72tYfhpPsaIXomX%2BRctkL2EKqMBpoWPwgXsNqWwd5zTBNNSwxWwlZXikSX8q8X4p1pBY0nMimKVoHVm7gbUOob5zpd%2BSVheTVGzcgvlXksHHytTCqXmyMAO5Ay6dwTgDqBYbWeSiShmDLm5PCJ4F4yiCdMiPM0aE0cK8dVEs271CWztxy3eAGbqreEkrRP7k%2BXGGsCHdShbUcEEF58QBUrL5g47VLwiHbI2cy91E%2Bjxi61wH5w3Mm%2BqJ7d9djVhSBHKQ%2F0yCfHlgQbkIj17GCsZh628P%2F7Xdxy2xZqJiDKiAxP6Fuv%2F1SAiNu1yZ51iTkp9CiHWkxS2koBKdjfDJf2KOjE3H1%2FNoa8xnUKO335lR6F6yrZcRiuj35yxZ03VlKLjS5O89Wh3JufZyCI4a5g2EUdJ51NIIMFud7lpO9JSQe6Lb1w9%2BcQ03gam7Hfibi1XKm%2BvvRg%2BY%2BaxYwD1n3smjZzwR94lcvh%2FeJM7UzeFgDXpG8sbax6uw0X4mrWRfObKzGz6v5eFQ7IU%2FTqZDWyIHsozZfGnz8rmzABOToiWkgwCqWIa541OedZDrJV4hY1H2mXLWAZ0f2fUWRBXd6bjkXgvfXWXEjUw77TDyQY6pgH41nOvl8MfZGPNcl2h%2BXX5M8F%2BIXzv7nYXJmJDbKCrUir%2B25j30tD4Yq7w4d8gvvV6s2sihRNKstpdYVXoiwbZ0qYIri0oSnNCVbIQ2WP%2BdsfvEYc%2BauTh9bJ5g1Efc5hzr7k6gkg7VNeM0BFHrTvjIG%2F1rOU%2BQwEyzPjQqmACIkYo7JZFcPVTEXYaU1LFzFWJVLFgf%2FACu%2BxUNvxCCsRkw106vLDM&X-Amz-Signature=f851c401eb1f354587e4ffa719ab1d16c940eae490df795a11fc7504e515fe6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBUEV43%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGWBZ81cGpj2bABW57wJoPcU2hgXvalcSqYQyoeizYiPAiBNkprPMDvEJDGltInLx41HFtM0eOhuU9RdzYCzHcRoUyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMoyDIM1tPs7EViKRSKtwDf0QqggutkHdOn4RoLr15AaZVa72tYfhpPsaIXomX%2BRctkL2EKqMBpoWPwgXsNqWwd5zTBNNSwxWwlZXikSX8q8X4p1pBY0nMimKVoHVm7gbUOob5zpd%2BSVheTVGzcgvlXksHHytTCqXmyMAO5Ay6dwTgDqBYbWeSiShmDLm5PCJ4F4yiCdMiPM0aE0cK8dVEs271CWztxy3eAGbqreEkrRP7k%2BXGGsCHdShbUcEEF58QBUrL5g47VLwiHbI2cy91E%2Bjxi61wH5w3Mm%2BqJ7d9djVhSBHKQ%2F0yCfHlgQbkIj17GCsZh628P%2F7Xdxy2xZqJiDKiAxP6Fuv%2F1SAiNu1yZ51iTkp9CiHWkxS2koBKdjfDJf2KOjE3H1%2FNoa8xnUKO335lR6F6yrZcRiuj35yxZ03VlKLjS5O89Wh3JufZyCI4a5g2EUdJ51NIIMFud7lpO9JSQe6Lb1w9%2BcQ03gam7Hfibi1XKm%2BvvRg%2BY%2BaxYwD1n3smjZzwR94lcvh%2FeJM7UzeFgDXpG8sbax6uw0X4mrWRfObKzGz6v5eFQ7IU%2FTqZDWyIHsozZfGnz8rmzABOToiWkgwCqWIa541OedZDrJV4hY1H2mXLWAZ0f2fUWRBXd6bjkXgvfXWXEjUw77TDyQY6pgH41nOvl8MfZGPNcl2h%2BXX5M8F%2BIXzv7nYXJmJDbKCrUir%2B25j30tD4Yq7w4d8gvvV6s2sihRNKstpdYVXoiwbZ0qYIri0oSnNCVbIQ2WP%2BdsfvEYc%2BauTh9bJ5g1Efc5hzr7k6gkg7VNeM0BFHrTvjIG%2F1rOU%2BQwEyzPjQqmACIkYo7JZFcPVTEXYaU1LFzFWJVLFgf%2FACu%2BxUNvxCCsRkw106vLDM&X-Amz-Signature=c6cd2b0aa591ff8b89ebd6fc1df29a12217c06024beb00caf90fabf870c64eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

