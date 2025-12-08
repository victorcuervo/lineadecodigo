---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTLL4MC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSzjg5BsIjcbWoVuh1dC8TEocQHMhW4tf3BHX%2FPweA3gIgbi71nn%2FPGa05dsgiV3UEFmt%2FeaZpZPkrK4ajEhKEQ00qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEzH08p%2FsUYseCCircA7S54n078Td5%2BYKm9qjZPvKtGFm4dZKkyKYVYIhtqdu%2BoYV%2FZH7mg8i%2Bg5CHJNgBXCZ5XYzPXiIYzJbYE2MHZv3K%2FTzqRwLSyzX3DZ0xCBVtrjjDbiahCkIWs0mjsMm7e6%2Fp5T1dgOnCM9S5bl7pIEkEH9BDug3GCVPxXEf2zRc0HMlOVAmASVhXqtdFwXyGSrjl7y0VzXfNoXRpVjQc4Kar8Mg0eyb6poJyDY7643QHeK%2BX8Qm5AyjW0ymhFRohszCFX%2FgxhHTPHCemrHRM%2FDFjg6r1jYsxeTPEmCxhkiQxqjoOEgTsDmoim34uPBimvxKvwD113oFfMfKjJOKhWnzcJQ%2BCirBhUqjZ9Y4eBQvU%2B8FUzaaCN70J127DJDikYYvs1YskkL5%2FPP1c7PWfRwlY2kmwHSnW4zHkqJFy9zUs%2Fwz0G4oNTMsxjSzSMn5bpEpTsSpi0jh8LQxdQBmtwkYJTbDA4v91F5a5s4gPPs5wca8hj3Kx1IYVbuECMkWH3Zl%2BrWtVKFrc4wxsFht%2FA11Wxt0aGNMhUSnaMF2GUoYw0wjDxp7FOkeDzYSNid%2BSPBc5DQFitsWGTxOgba%2BhYQtHJk7eJhb%2BASI5w5Dmtsu5t1tWwKG9eNi7%2BNXmMNSU2ckGOqUBsDU1CHuZ8YhMmmJNUpPAX3FX8xhJrFTRr2xPg9uj9pCaoU%2FL%2FopHao6m7sT%2BODNXBLIJD9Q%2BWNt5%2Ft7UHYSKJZIL6b%2BJflFhw3ytnTARqGVi6Shq4AHfLvPHNapv8RDBqnGSp5Ookwjdf%2BVNNDEcy4kwVYffUCMUR2uYE7vaJxfas6Bm8uOM8xLcqFt4Nd8H5ueuw0ugXodZi8OyidqQHU6BPIBW&X-Amz-Signature=f48728416afe125b6e391460f6878ac1f566e668efdaab28a2c8df6f2387fc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTLL4MC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSzjg5BsIjcbWoVuh1dC8TEocQHMhW4tf3BHX%2FPweA3gIgbi71nn%2FPGa05dsgiV3UEFmt%2FeaZpZPkrK4ajEhKEQ00qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEzH08p%2FsUYseCCircA7S54n078Td5%2BYKm9qjZPvKtGFm4dZKkyKYVYIhtqdu%2BoYV%2FZH7mg8i%2Bg5CHJNgBXCZ5XYzPXiIYzJbYE2MHZv3K%2FTzqRwLSyzX3DZ0xCBVtrjjDbiahCkIWs0mjsMm7e6%2Fp5T1dgOnCM9S5bl7pIEkEH9BDug3GCVPxXEf2zRc0HMlOVAmASVhXqtdFwXyGSrjl7y0VzXfNoXRpVjQc4Kar8Mg0eyb6poJyDY7643QHeK%2BX8Qm5AyjW0ymhFRohszCFX%2FgxhHTPHCemrHRM%2FDFjg6r1jYsxeTPEmCxhkiQxqjoOEgTsDmoim34uPBimvxKvwD113oFfMfKjJOKhWnzcJQ%2BCirBhUqjZ9Y4eBQvU%2B8FUzaaCN70J127DJDikYYvs1YskkL5%2FPP1c7PWfRwlY2kmwHSnW4zHkqJFy9zUs%2Fwz0G4oNTMsxjSzSMn5bpEpTsSpi0jh8LQxdQBmtwkYJTbDA4v91F5a5s4gPPs5wca8hj3Kx1IYVbuECMkWH3Zl%2BrWtVKFrc4wxsFht%2FA11Wxt0aGNMhUSnaMF2GUoYw0wjDxp7FOkeDzYSNid%2BSPBc5DQFitsWGTxOgba%2BhYQtHJk7eJhb%2BASI5w5Dmtsu5t1tWwKG9eNi7%2BNXmMNSU2ckGOqUBsDU1CHuZ8YhMmmJNUpPAX3FX8xhJrFTRr2xPg9uj9pCaoU%2FL%2FopHao6m7sT%2BODNXBLIJD9Q%2BWNt5%2Ft7UHYSKJZIL6b%2BJflFhw3ytnTARqGVi6Shq4AHfLvPHNapv8RDBqnGSp5Ookwjdf%2BVNNDEcy4kwVYffUCMUR2uYE7vaJxfas6Bm8uOM8xLcqFt4Nd8H5ueuw0ugXodZi8OyidqQHU6BPIBW&X-Amz-Signature=b5b94df8e20da1aa77c6e1f601ead0b24fe63af8ca27387cbfc5a4dc4e35fff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

