---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYBUD4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB9ae4hiVGSlKgDKLgYParVW3ulGQcXvMrm1i54AMT1UAiBvQPcXDBjx4NTv756sozEMF0r%2FEOfV4C45TyLkdEq8qSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXDn1sMausCEwMf%2B4KtwDOGy3RvQ6NFEF0TJCU3Pu%2BPPaqJa4Ze%2BqFV%2FlqlLZXoNS0%2F4ewngvZ9w%2F%2BdRFEe4OJp58LwkKwkrofq0VE5wOkCwRw6GIResBmyrh6wWpXArMVwKLmoQIvIPOMQvnf%2FVId02p98U9Dl9rJwTjROvf9YufyG1gEIF6wimJP20ooYtFa5JQ5w%2BON52oGInkInrkBPYTaRzUIYKjQK0HGFUSCK75k3d288AqIebSgdGVAFhiNKoGNYNvBiO%2F0pg3y5%2F6tyFI%2Bbbr5agdKe1IelgsK0ShT1%2Bi8yPtFKuvN1z95p%2B3s%2BdKxILdC1%2B1lHGkwVQ9o2Rs%2B7aZrii7546yhkchFLuIT5NHSNg%2B3c3srVYgZhKwO0HafXqa2imJ4haIZ4RyhAt62Nv7hd665ppQdRvaWai%2BlkZHtbTMR9BeCQ1gX9OtbQYIr%2FkfGvWDs15tj1724lbqiu01Z4WL%2FgwrOYMHXD0Lp761FraQ8lFcZks5w4lfhEEDHeLAkbd7k40NmF%2F2j8xCR9sOLWifksdHXsq9g6Q5eopuuHrlvnhLsgon97AxypIA3KNpIK2EF%2Fr1DLx%2F%2FG%2B%2FdoiBbkzTIxWp%2B7BkdwQz1IJ%2FH8kp%2Fuu9sU7aN4RoseeEBchtHq9q7uww%2BNTDyQY6pgHLULnhI3M3ttMCQY6nWMmIxfBbV4nXbMKgmi%2F5fTzQRXcwXg27%2B6e9QGYXM9WzMby%2Fiy1eYduyVRFHxIs19mejSHbPDw0WcUIxoSPqTJ3bO5WglCTGWu92Zsz%2FJoivsBGixhMUVKqBA4OpNUtt7LRSOeyNHCqaRv3h33Dwyl%2BqWZVTE6PM3kPbOzmzi1Tp3TZuuE9EvgfgUYQrzvzRz38qQu1EW1%2F0&X-Amz-Signature=16efcd023fc8f37991a7e0d1700ee0d534adea5c0904d0b802a68deaca14a757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYBUD4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB9ae4hiVGSlKgDKLgYParVW3ulGQcXvMrm1i54AMT1UAiBvQPcXDBjx4NTv756sozEMF0r%2FEOfV4C45TyLkdEq8qSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXDn1sMausCEwMf%2B4KtwDOGy3RvQ6NFEF0TJCU3Pu%2BPPaqJa4Ze%2BqFV%2FlqlLZXoNS0%2F4ewngvZ9w%2F%2BdRFEe4OJp58LwkKwkrofq0VE5wOkCwRw6GIResBmyrh6wWpXArMVwKLmoQIvIPOMQvnf%2FVId02p98U9Dl9rJwTjROvf9YufyG1gEIF6wimJP20ooYtFa5JQ5w%2BON52oGInkInrkBPYTaRzUIYKjQK0HGFUSCK75k3d288AqIebSgdGVAFhiNKoGNYNvBiO%2F0pg3y5%2F6tyFI%2Bbbr5agdKe1IelgsK0ShT1%2Bi8yPtFKuvN1z95p%2B3s%2BdKxILdC1%2B1lHGkwVQ9o2Rs%2B7aZrii7546yhkchFLuIT5NHSNg%2B3c3srVYgZhKwO0HafXqa2imJ4haIZ4RyhAt62Nv7hd665ppQdRvaWai%2BlkZHtbTMR9BeCQ1gX9OtbQYIr%2FkfGvWDs15tj1724lbqiu01Z4WL%2FgwrOYMHXD0Lp761FraQ8lFcZks5w4lfhEEDHeLAkbd7k40NmF%2F2j8xCR9sOLWifksdHXsq9g6Q5eopuuHrlvnhLsgon97AxypIA3KNpIK2EF%2Fr1DLx%2F%2FG%2B%2FdoiBbkzTIxWp%2B7BkdwQz1IJ%2FH8kp%2Fuu9sU7aN4RoseeEBchtHq9q7uww%2BNTDyQY6pgHLULnhI3M3ttMCQY6nWMmIxfBbV4nXbMKgmi%2F5fTzQRXcwXg27%2B6e9QGYXM9WzMby%2Fiy1eYduyVRFHxIs19mejSHbPDw0WcUIxoSPqTJ3bO5WglCTGWu92Zsz%2FJoivsBGixhMUVKqBA4OpNUtt7LRSOeyNHCqaRv3h33Dwyl%2BqWZVTE6PM3kPbOzmzi1Tp3TZuuE9EvgfgUYQrzvzRz38qQu1EW1%2F0&X-Amz-Signature=c9f74f34ad51d8b475dc2ecf983ff28d2a8f2fca8be00a7a2ce77854d518db5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
