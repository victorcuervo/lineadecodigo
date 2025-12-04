---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5P2TQQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGz3zmSuYu0evpcl%2FX7nB0gMtRVWtlb%2BB7H6Y%2F5Ez1zMAiEA%2FsI2UXR8IyuBnYbfliiRsva6XvCfUwQfcYR2XGhnytgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO5Cwz2hWVxsvPGlSrcAyz049JuAtSWXg2fISq%2FHcx58%2BocRBq%2FOJ%2B8y1Nu6kw5c8jSvl6nsmUxGxqoGIapfV1qzD8n7bLHjTw2jyUQv0wcdX8nI6v%2FR8VobmKwQUEITJYjg9OmXDnhr2ePxAVdJMmAKiUzG3R%2Fb2svHQtoK5vGzdHP%2B2OzFT28I7R0p6gAcP9lvejUfKTFPG4hqo5PdSr6DRUBs7sg1HCPnjSfzxdmvyx9GWOhnGYb8Jp8jkEp%2BzOdNGvbIhOG1lh2qpqZfDuxxaipDJyEXD4CYeTRPWhtohAU%2BCdjLzd03yGZIrFeMiJGOxebZC6WpgmMuRR03ZpzOpMEA8Yl1wGwCvu4CPlWUMBLQOG5Vc0LseIKOikwv%2FwsBdUm41jU4pyY1ljzlTHe0dxQRK0RMwS1hYUH7eWESXN%2BXaLy4o9XXA3kUKGRNou3LtNdL9v6LvYdh3jKXENCPwD1hkrWwgo8sdk3cYgbqxQJRfvDH8wJ%2BIypJMIswqtVzWJaBobM2yOH1PzbtruMmrj4QH44TmjcuzRKztDhtRtjNuVI8F3gZI8XMWHQ7pTaM9MZPEZ9Dozufv1Dtur%2BLYccZFmyJ0Spq%2BBuRmZupPi3AjoIXOUg0owbHn7QqD3QO%2Be4FoUI7ozyMKGQxMkGOqUBoBMklYscHbU01mECkvq3p5OL6BU8flH2mD5teHfd1QALY%2BKZnRaM2%2B3DxI7T1jOnBog8oDSUAkiRKv3URhrA77CpFw94PBbqlXKJRNfNYBWywWmgLI3G2z7pge%2FrVSvbCa2K%2BuR0%2Bj4FK5XKUrpK%2B%2FNLctpLIICtiIi%2BRKuCSXVstEA7V7WkcEzLz3VEFma5HVJwt8t4k1bTuLgoDc2bozgZvld7&X-Amz-Signature=db12fbd368004c269aa339970f97eea72982876c1c3981b4f2f05b71fce78dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5P2TQQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGz3zmSuYu0evpcl%2FX7nB0gMtRVWtlb%2BB7H6Y%2F5Ez1zMAiEA%2FsI2UXR8IyuBnYbfliiRsva6XvCfUwQfcYR2XGhnytgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO5Cwz2hWVxsvPGlSrcAyz049JuAtSWXg2fISq%2FHcx58%2BocRBq%2FOJ%2B8y1Nu6kw5c8jSvl6nsmUxGxqoGIapfV1qzD8n7bLHjTw2jyUQv0wcdX8nI6v%2FR8VobmKwQUEITJYjg9OmXDnhr2ePxAVdJMmAKiUzG3R%2Fb2svHQtoK5vGzdHP%2B2OzFT28I7R0p6gAcP9lvejUfKTFPG4hqo5PdSr6DRUBs7sg1HCPnjSfzxdmvyx9GWOhnGYb8Jp8jkEp%2BzOdNGvbIhOG1lh2qpqZfDuxxaipDJyEXD4CYeTRPWhtohAU%2BCdjLzd03yGZIrFeMiJGOxebZC6WpgmMuRR03ZpzOpMEA8Yl1wGwCvu4CPlWUMBLQOG5Vc0LseIKOikwv%2FwsBdUm41jU4pyY1ljzlTHe0dxQRK0RMwS1hYUH7eWESXN%2BXaLy4o9XXA3kUKGRNou3LtNdL9v6LvYdh3jKXENCPwD1hkrWwgo8sdk3cYgbqxQJRfvDH8wJ%2BIypJMIswqtVzWJaBobM2yOH1PzbtruMmrj4QH44TmjcuzRKztDhtRtjNuVI8F3gZI8XMWHQ7pTaM9MZPEZ9Dozufv1Dtur%2BLYccZFmyJ0Spq%2BBuRmZupPi3AjoIXOUg0owbHn7QqD3QO%2Be4FoUI7ozyMKGQxMkGOqUBoBMklYscHbU01mECkvq3p5OL6BU8flH2mD5teHfd1QALY%2BKZnRaM2%2B3DxI7T1jOnBog8oDSUAkiRKv3URhrA77CpFw94PBbqlXKJRNfNYBWywWmgLI3G2z7pge%2FrVSvbCa2K%2BuR0%2Bj4FK5XKUrpK%2B%2FNLctpLIICtiIi%2BRKuCSXVstEA7V7WkcEzLz3VEFma5HVJwt8t4k1bTuLgoDc2bozgZvld7&X-Amz-Signature=60524429a43dd6171c3847b046ccc2e9bfdec3cc874517f255fd66b83c3e4cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

