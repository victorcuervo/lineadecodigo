---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNNWEY27%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhfhXoeXDVWqcMryAl1EAzp8%2FoMyaCfQcf2exWXKCukAiBnBT6IH3XwJjz6TAamlfRnqvqrChod%2BFa%2BfiW9HUb5aCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhIeI1k2q8U4GfGIgKtwD9i6ZBZ6bvt28eUVPWG6GuCSxN4kxCddXxrsq5fRIsJjZxuENOOUkqcS7ZjDWcdIAOPS84VHdhCjtiO2e2JDGjq3yEfHRSGKBBLQGYYUat2Da9OwejrwH0eWznRKR5ff37JeoVrSZ98ioSr%2F7DaGokwQrr%2FM6NHVgjU7fPKf3c16v1MXpZ%2FtDUFQSx%2Fsq%2Flb7yMzvGoktqalBvSi9qFIPw5LfZioa2C%2BjeSu3VMrZsxNBE4cVO3TJ9pWH5c30Dh2wN%2BVPIUC4HYnMnpvh5AUab35sEpamdjoeNlCzzrRUzcbUHxyE%2BKmHTJKMplvsibk%2FODxNsHdnutzYLUVnNsdD4KZcqdNgFH9po%2B%2Bu0VMy75KfykPobfKWgrlMoVtt5NZN7gSynnI71E5KE7gGXPBcfg346gBtuYvF7HTL1ZYYwHcY4Mqc1wdAzZiKUQQM3Rwl1bs8rvNHKMxrY9UEW95FqWTwSbc6NssHAUxliGXxXgaAab7LaoMqy6IavS6y%2Fvh7WzkFneNhLrLkNlKdJ7rf%2BdsuH62mLFseiYPJc%2BLGmw2OOcDmsw%2BS6EplI8v%2FNEldWK3DW7gqdVXswPno0n%2BoPG3cfDv9k%2FR%2FMMG7CKWMeEjw35ckTsvIMy2xCBEw4uXeyQY6pgHzu83tnhJJoEPtzRkGB0AVFrUsPuYRpbpFrdSdH8rq%2FsCP%2F8jMO1HCssSFCOci5XxogcbyorkNad8JhJC77Wwxd0%2BEMIamGXSQWL3m%2Fb%2FNRUfEx5611Zg2O%2Fv%2BS2UeLjqzXFhslQgCSMMn4wnG9M8byuW4nFcdNVJEarD0auX6XFyPIlARQysnk%2BMwq8inYb16mWzVwK08CrgahCuBEn%2FIirGySHDM&X-Amz-Signature=ab806ba3b55e7a994d118ef2a49b548e09be6ae5f927fb8091590708286e1f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNNWEY27%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhfhXoeXDVWqcMryAl1EAzp8%2FoMyaCfQcf2exWXKCukAiBnBT6IH3XwJjz6TAamlfRnqvqrChod%2BFa%2BfiW9HUb5aCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhIeI1k2q8U4GfGIgKtwD9i6ZBZ6bvt28eUVPWG6GuCSxN4kxCddXxrsq5fRIsJjZxuENOOUkqcS7ZjDWcdIAOPS84VHdhCjtiO2e2JDGjq3yEfHRSGKBBLQGYYUat2Da9OwejrwH0eWznRKR5ff37JeoVrSZ98ioSr%2F7DaGokwQrr%2FM6NHVgjU7fPKf3c16v1MXpZ%2FtDUFQSx%2Fsq%2Flb7yMzvGoktqalBvSi9qFIPw5LfZioa2C%2BjeSu3VMrZsxNBE4cVO3TJ9pWH5c30Dh2wN%2BVPIUC4HYnMnpvh5AUab35sEpamdjoeNlCzzrRUzcbUHxyE%2BKmHTJKMplvsibk%2FODxNsHdnutzYLUVnNsdD4KZcqdNgFH9po%2B%2Bu0VMy75KfykPobfKWgrlMoVtt5NZN7gSynnI71E5KE7gGXPBcfg346gBtuYvF7HTL1ZYYwHcY4Mqc1wdAzZiKUQQM3Rwl1bs8rvNHKMxrY9UEW95FqWTwSbc6NssHAUxliGXxXgaAab7LaoMqy6IavS6y%2Fvh7WzkFneNhLrLkNlKdJ7rf%2BdsuH62mLFseiYPJc%2BLGmw2OOcDmsw%2BS6EplI8v%2FNEldWK3DW7gqdVXswPno0n%2BoPG3cfDv9k%2FR%2FMMG7CKWMeEjw35ckTsvIMy2xCBEw4uXeyQY6pgHzu83tnhJJoEPtzRkGB0AVFrUsPuYRpbpFrdSdH8rq%2FsCP%2F8jMO1HCssSFCOci5XxogcbyorkNad8JhJC77Wwxd0%2BEMIamGXSQWL3m%2Fb%2FNRUfEx5611Zg2O%2Fv%2BS2UeLjqzXFhslQgCSMMn4wnG9M8byuW4nFcdNVJEarD0auX6XFyPIlARQysnk%2BMwq8inYb16mWzVwK08CrgahCuBEn%2FIirGySHDM&X-Amz-Signature=0a76a14660f10c8c5ce8b6d8809e0291f68acde47a8da02c766d82f4f92fec42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

