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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36IH676%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICt%2Bim8PwP%2Fvv2roNz9D77mH%2BQKhrr%2Bbl3R3GfOloie%2BAiBLARVMSK%2BuVlYMTWqsEIQiDO94n7HiD1G8Xj9TaPdH5yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMucFPjw5ugv3x%2BXI8KtwDDCWq9ZDG7HxSmJ%2BHtsxHrYbvM3lgDnwJvX0fI%2FVGZhZpsokxX2SW7csIGNjdTvdjHgO4BeDyK5ab9h7eEiHdvwMvCeGr1d%2BXIyCuMggU0zWjOZqlivvVeX6yep%2FZhI%2B2RH3bJVj1CQY56FNqsd%2FxyUn8ntqk6prvz%2BL1%2B3dumu5%2FXarz90iJf1YQs6ssP2T50Vs4otVEdVIpT29rlGyIfaJTEy1pVS3O2QApC05gSfaHFZ%2BSBLiZWbtP%2FbP%2F0gPAEY3NNpGBGTDhpFcAqNzvEE%2F9sePjXP4K1JvAz7D8SfvFoSj0OTGdqIVJXNbtZRTvEoWifUpTxM1W%2FIECQx8CI7pvc5LIGKpr%2FoHEqAO5tC0nRcIXSmPAqghBFgfWgCa%2FaFDomSGOthpcusOqKlco4IX8wOZzixKhD997CeADfhD0nEwWBBL0mwmoqM2ARLaOiaZ5QA7UG675D9Iclktqja9MrliPcXCJnAX8WuZ0ZRMND8%2BcFIDpTOk0a8M2iB5iJBqkaAsclqZ%2BYdbGNJHg5uV4EOHI54KrOh4wUzqSipGs6wl4W84TCMetzFnoeXkJV6lINn%2FYRFdN59SzhbPt6NPJ6vwrMwPe%2BmvYFPD0JmZRhgYWjY2tWWR%2B1MQw7Zq%2FyQY6pgEZ%2BGNHk1TeoBbMYBM6pY8n2h4kklYuOUSlw5T%2F5f2QnnEP4euHR2KSRnjMdb5rbHezZKKsukO9tuJwiaLoXxnIt5t0fDouqHxwLcNDcyhlOqtgj3D6dzgVDLs4HNQV6XIqs6s7iyaA%2Ff1UcVD1mKEJUMwLn34qAzso71utVCP17p8g3MNxRDS888f6NAZAkEITM9QlQ9ftMnVxCg5k23K4bOjlDS42&X-Amz-Signature=0cc3aa174ae2c311e8ca6f50d40dc2d75f3b4605f5397548dc590d5501411d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36IH676%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICt%2Bim8PwP%2Fvv2roNz9D77mH%2BQKhrr%2Bbl3R3GfOloie%2BAiBLARVMSK%2BuVlYMTWqsEIQiDO94n7HiD1G8Xj9TaPdH5yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMucFPjw5ugv3x%2BXI8KtwDDCWq9ZDG7HxSmJ%2BHtsxHrYbvM3lgDnwJvX0fI%2FVGZhZpsokxX2SW7csIGNjdTvdjHgO4BeDyK5ab9h7eEiHdvwMvCeGr1d%2BXIyCuMggU0zWjOZqlivvVeX6yep%2FZhI%2B2RH3bJVj1CQY56FNqsd%2FxyUn8ntqk6prvz%2BL1%2B3dumu5%2FXarz90iJf1YQs6ssP2T50Vs4otVEdVIpT29rlGyIfaJTEy1pVS3O2QApC05gSfaHFZ%2BSBLiZWbtP%2FbP%2F0gPAEY3NNpGBGTDhpFcAqNzvEE%2F9sePjXP4K1JvAz7D8SfvFoSj0OTGdqIVJXNbtZRTvEoWifUpTxM1W%2FIECQx8CI7pvc5LIGKpr%2FoHEqAO5tC0nRcIXSmPAqghBFgfWgCa%2FaFDomSGOthpcusOqKlco4IX8wOZzixKhD997CeADfhD0nEwWBBL0mwmoqM2ARLaOiaZ5QA7UG675D9Iclktqja9MrliPcXCJnAX8WuZ0ZRMND8%2BcFIDpTOk0a8M2iB5iJBqkaAsclqZ%2BYdbGNJHg5uV4EOHI54KrOh4wUzqSipGs6wl4W84TCMetzFnoeXkJV6lINn%2FYRFdN59SzhbPt6NPJ6vwrMwPe%2BmvYFPD0JmZRhgYWjY2tWWR%2B1MQw7Zq%2FyQY6pgEZ%2BGNHk1TeoBbMYBM6pY8n2h4kklYuOUSlw5T%2F5f2QnnEP4euHR2KSRnjMdb5rbHezZKKsukO9tuJwiaLoXxnIt5t0fDouqHxwLcNDcyhlOqtgj3D6dzgVDLs4HNQV6XIqs6s7iyaA%2Ff1UcVD1mKEJUMwLn34qAzso71utVCP17p8g3MNxRDS888f6NAZAkEITM9QlQ9ftMnVxCg5k23K4bOjlDS42&X-Amz-Signature=339798a4679dc4e0ed8aff47bbe815e28db2b57012fee772c08b559d7685a8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

